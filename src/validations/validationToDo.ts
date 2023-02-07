import * as yup from 'yup'

const ToDoFormSchema = yup.object().shape({
  name: yup
    .string().required("Descreva uma tarefa")
})

export default ToDoFormSchema;