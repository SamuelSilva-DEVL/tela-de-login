import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 200px;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  color: rgb(150,150,150);
  border: 0;
  border-bottom: 2px solid rgb(150,150,150);
  outline: 0;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.cinza};

  :focus, :valid{
    border-bottom: 2px solid ${(props) => props.theme.colors.azul};
  }

  :focus ~ label{
    transform: translateY(-24px);
    font-size: 12px;
    color: ${(props) => props.theme.colors.azul};
  }
`

export const Label = styled.label`
  font-size: 16px;
  position: absolute;
  left: 0;
  bottom: 5px;
  color: rgb(150,150,150);
  cursor: text;
  transition: 0.5s ease-in-out;
`