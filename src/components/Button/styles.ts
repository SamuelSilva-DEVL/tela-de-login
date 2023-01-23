import styled from "styled-components";

interface ButtonProps {
  background?: string
}

export const Button = styled.button<ButtonProps>` 
  width: 200px;
  height: 48px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.azul};
  color: #ffff;
  font-size: 20px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  :hover{
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.azul};
    color: ${(props) => props.theme.colors.azul};
    transition: 0.5s;
  }
`