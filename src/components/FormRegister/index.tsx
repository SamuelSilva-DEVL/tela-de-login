import {SubmitHandler, useForm} from 'react-hook-form'
import { ContainerForm, Input } from './styles'
import {yupResolver} from "@hookform/resolvers/yup"
import CreateUserFormSchema from '../../validations/validationRegister'
import { ButtonAction } from '../Button';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

type CreateUserData = {
  name: string;
  email: string;
  password: string;
}

export function FormularioRegistrar(){
  const {signup} = useAuth()
  const [error, setError] = useState<string | boolean>()
  const navigate = useNavigate()
  const {
    register, 
    handleSubmit, 
    formState: {errors},
    reset
  } = useForm<CreateUserData>({resolver: yupResolver(CreateUserFormSchema)})

  const handlerCreatedUser: SubmitHandler<CreateUserData> = async (values) => {
    let response = signup(values.email, values.password, values.name)

    if(response == true){
      alert("Conta registrada com sucesso!")
      navigate("/")
    }else{
      setError(response),
      reset()
    }
  }

  return(
    <ContainerForm action='' onSubmit={handleSubmit(handlerCreatedUser)}>
      <Input type="text" placeholder='Nome' {...register("name")}/>
      {errors.name?.message && <p style={{color: 'red'}}>{errors.name.message}</p>}
      <Input type="text" placeholder='Email' {...register("email")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}
      <Input type="passowrd" placeholder='Senha' {...register("password")}/>
      {errors.password?.message && <p style={{color: 'red'}}>{errors.password.message}</p>}

      <ButtonAction title='Registrar-se'/>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </ContainerForm>
  )
}
