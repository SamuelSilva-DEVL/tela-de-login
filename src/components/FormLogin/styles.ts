import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`

export const Input = styled.input`
  width: 200px;
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
`