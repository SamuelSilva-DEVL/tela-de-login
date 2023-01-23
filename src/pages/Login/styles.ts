import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const SectionImage = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.azul};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionFormulario = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.cinza};
`
export const Formulario = styled.div`
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`