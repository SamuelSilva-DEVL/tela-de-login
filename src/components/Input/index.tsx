import { ContainerInput, Input, Label } from "./styles";

interface IInputProps {
  type: string,
  label?: string
}

export function InputForm({type, label}: IInputProps){
  return(
    <ContainerInput>
      <Input type={type}/>
      <Label>{label}</Label>
    </ContainerInput>
  )
}