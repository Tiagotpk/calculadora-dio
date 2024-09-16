import Input from "./Components/Input";
import Button from "./Components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState();
  const [operation, setOperation] = useState();

  const handlerAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if (number === "." && prev.includes(".")) return prev;
      return `${prev === "0" ? "" : prev}${number}`;
    });
  };

  const handlerClear = () => {
    setCurrentNumber("");
    setFirstNumber("0");
    setOperation("");
  };

  const handleOperation = (op) => {
    if (currentNumber !== "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    }
  };

  const handlerEquals = () => {
    if (firstNumber && operation) {
      const first = parseFloat(firstNumber);
      const second = parseFloat(currentNumber);
      let result = 0;

      switch (operation) {
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
        case "*":
          result = first * second;
          break;
        case "/":
          result = second !== 0 ? first / second : "Error";
          break;
        default:
          break;
      }
      setCurrentNumber(result.toString());
      setFirstNumber();
      setOperation();
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handlerClear} />
          <Button label=" " disabled />
          <Button label=" " disabled />
          <Button label="/" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handlerAddNumber("7")} />
          <Button label="8" onClick={() => handlerAddNumber("8")} />
          <Button label="9" onClick={() => handlerAddNumber("9")} />
          <Button label="*" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="6" onClick={() => handlerAddNumber("6")} />
          <Button label="5" onClick={() => handlerAddNumber("5")} />
          <Button label="4" onClick={() => handlerAddNumber("4")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="3" onClick={() => handlerAddNumber("3")} />
          <Button label="2" onClick={() => handlerAddNumber("2")} />
          <Button label="1" onClick={() => handlerAddNumber("1")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handlerAddNumber("0")} />
          <Button label="." onClick={() => handlerAddNumber(".")} />
          {/* <Button label="mod" /> */}
          <Button label="=" onClick={handlerEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
