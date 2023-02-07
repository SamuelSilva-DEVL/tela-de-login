import { Checkbox } from "@mui/material";
import { Button, Container, TextDescription } from "./styles";
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useState } from "react";

interface IListToDoProps {
  description: string
  list: {
    id: number
    name: string
  }
  onClick?: any
}

export function ListToDo({description, list, onClick}: IListToDoProps){
  const [styleText, setStyleText] = useState("none")
  const checked = () => {
    styleText == "none" ? setStyleText("lign") : setStyleText("none")    
  }
  
  return(
    <Container>
      <Checkbox onChange={checked} color="success"/>
      <TextDescription styled={styleText}>{description}</TextDescription>
      <Button onClick={() => onClick(list.id)}><RiDeleteBin6Fill/></Button>
    </Container>
  )
}