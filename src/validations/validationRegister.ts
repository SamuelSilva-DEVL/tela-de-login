import * as yup from 'yup'

const CreateUserFormSchema = yup.object().shape({
  name: yup
    .string().required("Campo nome é obrigatório").min(3, "Nome deve conter mais de 3 caracteres"),
  email: yup
    .string().required("Campo email é obrigatório").email("Insira um email valido"),
  password: yup
    .string().required("Campo senha é obrigatorio").min(6, "Senha deve conter mais de 6 caracteres")
})

export default CreateUserFormSchema;