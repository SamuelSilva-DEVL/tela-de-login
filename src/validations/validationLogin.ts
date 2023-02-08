import * as yup from 'yup'

const LoginUserFormSchema = yup.object().shape({
  email: yup
    .string().required("Campo email é obrigatório").email("Email invalido"),
  password: yup
    .string().required("Campo senha é obrigatório").min(6, "Senha invalida")
})

export default LoginUserFormSchema;