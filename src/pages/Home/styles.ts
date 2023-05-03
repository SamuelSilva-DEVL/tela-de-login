import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.azul};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1{
    margin-top: 28px;
  }
`

export const ContainerFormList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 20px;
`

export const ContainerList = styled.div`
  max-height: 500px;
  width: 650px;
  overflow-y: scroll;
`
export const Input = styled.input`
  width: 500px;
  height: 40px;
  font-size: 16px;
  border: none;
  padding: 8px;
  border-radius: 10px;

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
  color: #fff;
`

export const TextError = styled.p`
  color: red;
  font-size: 25px;
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