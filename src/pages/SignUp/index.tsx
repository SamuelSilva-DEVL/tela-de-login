
import LogoLocked from '../../assets/locked.png'
import { ImageForm } from '../../components/CicleImage';
import { Container, Formulario, Image, SectionFormulario, SectionImage } from './styles';
import { FormularioRegistrar } from '../../components/FormRegister';
import {RiPencilFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

export function SignUp(){
  return(
    <Container>
      <SectionImage>
        <Image src={LogoLocked} alt="liberar-acesso" />
      </SectionImage>
      <SectionFormulario>
        <Formulario>
          <ImageForm logo={<RiPencilFill />}/>
          <FormularioRegistrar />
          <p style={{textAlign: 'center'}}>Já possui uma conta? 
            <Link 
              to="/" 
              style={{
                textDecoration: 'none'
              }}
            > Entrar.</Link>
          </p>
        </Formulario>
      </SectionFormulario>
    </Container>
  )
}