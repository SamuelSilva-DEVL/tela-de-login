import { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps{
  title: string,
  onClick?: any,
  background?: string,
  type?: string
}

export function ButtonAction({
  title, 
  onClick, 
  background, 
  type
}: ButtonProps){
  return(
    <>
      <Button 
        type="submit"
        onClick={onClick}
        background={background}
      >
        {title}
      </Button>
    </>
  )
}