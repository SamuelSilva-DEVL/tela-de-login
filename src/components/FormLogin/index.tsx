import { ButtonAction } from "../Button";
import { ContainerForm, Input } from "./styles";
import LoginUserFormSchema from '../Validations/validationLogin'
import {yupResolver} from "@hookform/resolvers/yup"
import {SubmitHandler, useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'

type LoginUserData = {
  email: string;
  senha: string;
}

export function FormularioLogin(){
  const navigate = useNavigate()
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset 
  } = useForm<LoginUserData>({resolver: yupResolver(LoginUserFormSchema)})

  console.log("Errors", errors)

  const usuarios = localStorage.getItem('users')
  console.log(usuarios)

  const handlerCreatedUser: SubmitHandler<LoginUserData> = async (values) => {
    console.log(values)
    navigate("/home")
  }

  return(
    <ContainerForm action='' onSubmit={handleSubmit(handlerCreatedUser)}>
      <Input type="text" placeholder='Email' {...register("email")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}
      <Input type="password" placeholder='Senha' {...register("senha")}/>
      {errors.senha?.message && <p style={{color: 'red'}}>{errors.senha.message}</p>}

      <ButtonAction title='Entrar'/>
    </ContainerForm>
  )
}