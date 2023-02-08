import { Container, Formulario, SectionFormulario, SectionImage } from "./styles";
import LogoLocked from '../../assets/locked.png'
import { ImageForm } from '../../components/CicleImage';
import { FormularioLogin } from '../../components/FormLogin';
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";

export function SignIn(){
  return(
    <Container>
      <SectionImage>
        <img src={LogoLocked} alt="" />
      </SectionImage>
      <SectionFormulario>
        <Formulario>
          <ImageForm logo={<BsFillPersonFill />}/>
          <FormularioLogin />
          <p style={{textAlign: 'center'}}>Não tem uma conta? 
          <Link 
            to="/register" 
            style={{
              textDecoration: 'none'
            }}
          > Registrar-se.</Link></p>
        </Formulario>
      </SectionFormulario>
    </Container>
  )
}