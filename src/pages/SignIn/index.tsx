import { 
  Container, 
  Formulario, 
  Image, 
  SectionFormulario, 
  SectionImage 
} from "./styles";
import LogoLocked from '../../assets/locked.png'
import { ImageForm } from '../../components/CicleImage';
import { FormularioLogin } from '../../components/FormLogin';
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function SignIn(){
  return(
    <Container>
      <SectionImage>
        <Image src={LogoLocked} alt="liberar-acesso"/>
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