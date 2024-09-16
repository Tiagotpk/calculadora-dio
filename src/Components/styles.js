import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaffaa;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #aaaaff;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;

    font-size: 24px;
    font-family: "Roboto";
    color: #fff;
  }
`;

export const ButtonConainer = styled.button`
  padding: 20px;
  margin: 6px;

  border: 1px solid #cdcdcd;
  border-radius: 6px;

  background-color: #980198;
  color: #fff;
  
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover{
    opacity: 0.6;
  }
`;
