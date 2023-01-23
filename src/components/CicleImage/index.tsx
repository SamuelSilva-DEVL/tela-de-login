import { Container, Imagem } from "./styles";
import { ReactNode } from "react";

interface IImageProps {
  logo?: ReactNode
}

export function ImageForm({logo}: IImageProps){
  return(
    <Container>
      <Imagem>
        {logo}
      </Imagem>
    </Container>
  )
}