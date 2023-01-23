
import LogoLocked from '../../assets/locked.png'
import { ImageForm } from '../../components/CicleImage';
import { Container, Formulario, SectionFormulario, SectionImage } from './styles';
import { FormularioRegistrar } from '../../components/FormRegister';
import {RiPencilFill} from 'react-icons/ri'

export function Registrar(){
  return(
    <Container>
      <SectionImage>
        <img src={LogoLocked} alt="" />
      </SectionImage>
      <SectionFormulario>
        <Formulario>
          <ImageForm logo={<RiPencilFill />}/>
          <FormularioRegistrar />
        </Formulario>
      </SectionFormulario>
    </Container>
  )
}