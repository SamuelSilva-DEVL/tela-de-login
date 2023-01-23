import {SubmitHandler, useForm} from 'react-hook-form'
import { ContainerForm, Input } from './styles'
import {yupResolver} from "@hookform/resolvers/yup"
import CreateUserFormSchema from '../Validations/validationRegister'
import { InputForm } from '../Input';
import { ButtonAction } from '../Button';
import {useNavigate} from 'react-router-dom'

type CreateUserData = {
  name: string;
  sobrenome: string;
  email: string;
  senha: string;
  fulano: string;
}

export function FormularioRegistrar(){
  const navigate = useNavigate()
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset 
  } = useForm<CreateUserData>({resolver: yupResolver(CreateUserFormSchema)})

  console.log("Errors", errors)

  const handlerCreatedUser: SubmitHandler<CreateUserData> = async (values) => {
    const usuario = JSON.stringify(values)
    localStorage.setItem('users', usuario)
    alert("Conta registrada com sucesso!")
    reset()
    navigate("/")
  }

  return(
    <ContainerForm action='' onSubmit={handleSubmit(handlerCreatedUser)}>
      <Input type="text" placeholder='Nome' {...register("name")}/>
      {errors.name?.message && <p style={{color: 'red'}}>{errors.name.message}</p>}
      <Input type="text" placeholder='Sobrenome' {...register("sobrenome")}/>
      {errors.sobrenome?.message && <p style={{color: 'red'}}>{errors.sobrenome.message}</p>}
      <Input type="text" placeholder='Email' {...register("email")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}
      <Input type="passowrd" placeholder='Senha' {...register("senha")}/>
      {errors.senha?.message && <p style={{color: 'red'}}>{errors.senha.message}</p>}

      {/* <input 
        type="passwords" 
        // @ts-ignore
        name='senha' 
        {...register("senha")}
      /> */}
      <ButtonAction title='Registrar-se'/>

      {/* <button 
        type='submit'
      >
        Registrar-se
      </button> */}
    </ContainerForm>
  )
}
