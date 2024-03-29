import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ListToDo } from "../../components/ListToDo"
import ToDoFormSchema from "../../validations/validationToDo"
import { Button, ButtonLogout, Container, ContainerFormList, ContainerList, Form, Input, TextError } from "./styles"
import { GrAddCircle } from 'react-icons/gr'
import useAuth from "../../hooks/HookAuthContext"
import { useNavigate } from "react-router-dom"

interface IListProps {
  name: string
  id: number
}

export function HomePage(){
  const { signout, user } = useAuth()
  const navigate = useNavigate()
  const [items, setItems] = useState<IListProps []>([])
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset 
  } = useForm<IListProps>({resolver: yupResolver(ToDoFormSchema)})

  const addListItem: SubmitHandler<IListProps> 
    = async  (value) => {
    var newList = [...items]
    newList.push({
      id: items.length + 1,
      name: value.name
    })

    setItems(newList)
    reset()
  }

  const deleteListItem = (id: number) => {
     var filter = items.filter((items) => items.id != id)
     setItems(filter)
  }

  return (
      <Container>
        <h1>Bem vindo {user?.name}</h1>

        <ButtonLogout
          onClick={() => [signout(), navigate("/")]}
        >
          Sair
        </ButtonLogout>

        <h1>Lista de tarefas</h1>

        {errors?.name && <TextError>{errors.name.message}</TextError>}

        <ContainerFormList>
          <Form onSubmit={handleSubmit(addListItem)}>
            <Input type="text" {...register("name")} placeholder="Adicione uma tarefa"/>
            <Button type="submit"><GrAddCircle/></Button>
          </Form>

          <ContainerList>
            {items?.map((item, id) => (
              <ListToDo 
                key={item.id} 
                description={item.name}
                list={item}
                onClick={deleteListItem}
              />
            ))}
          </ContainerList>
        </ContainerFormList>
      </Container>  
  )
  
}