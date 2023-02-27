import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.azul};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1{
    margin-top: 28px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`

export const ContainerList = styled.div`
  min-height: 100px;
  width: 600px;
`
export const Input = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  border: none;
  padding: 8px;

  :focus{
    outline: 0;
  }
`
export const Button = styled.button`
  background: none;
  height: 40px;
  border: none;
  cursor: pointer;
  font-size: 36px;
`

export const TextError = styled.p`
  color: red;
`
export const ButtonLogout = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  position: absolute;
  left: 5%;
  bottom: 5%;
  transition: all 0.5s;

  :hover{
    background-color: #000000;
    color: #fff;
  }
`