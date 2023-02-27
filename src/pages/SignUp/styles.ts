import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export const SectionImage = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.azul};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px){
    width: 100%;
    height: 50%;
  }
`
export const Image = styled.img`
  height: 500px;
  width: 500px;
  
  @media (max-width: 450px){
    display: none;
  }
`

export const SectionFormulario = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.cinza};

  @media (max-width: 450px){
    width: 100%;
    height: 50%;
  }
`
export const Formulario = styled.div`
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 450px){
    position: absolute;
    top: 20%;
    background-color: ${(props) => props.theme.colors.cinza};
  }
`