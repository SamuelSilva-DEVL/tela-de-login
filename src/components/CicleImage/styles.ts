import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(50% at 50% 50%);
  background-color: ${(props) => props.theme.colors.azul};
`

export const Imagem = styled.div`
  width: 60%;
  height: 60%;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`