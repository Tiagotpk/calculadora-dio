import { ButtonConainer } from "./styles";

const Button = ({label, onClick}) => {
  return (
    <ButtonConainer onClick={onClick }>
      {label}
    </ButtonConainer>
  )
}


export default Button;