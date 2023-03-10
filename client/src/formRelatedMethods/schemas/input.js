import * as yup from 'yup';

const emailSchema = yup.object().shape({
    email: yup.string().required("O campo 'E-mail' é obrigatório!").email("E-mail inválido")
})

export {emailSchema}