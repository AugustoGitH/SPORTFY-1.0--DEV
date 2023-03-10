
import * as yup from 'yup';
import valid from 'card-validator';

const loginSchema= yup.object().shape({
    email: yup.string().required("O campo 'E-mail' é obrigatório!").email("E-mail inválido"),
    password: yup.string().required("O campo 'Senha' é obrigatório!").min(5, "A senha deve conter no minimo 5 caracteres!")
})

const registerSchema = yup.object().shape({
    name: yup.string().required("O campo 'Nome' é obrigatório!").min(2, "Nome inválido!"),
    surname: yup.string().required("O campo 'Sobrenome' é obrigatório!").min(2, "Sobrenome inválido!"),
    day: yup.number().required("Obrigatório!"),
    month: yup.number().required("Obrigatório!"),
    year: yup.number().required("Obrigatório!"),
    cpf: yup.string().required("O campo 'CPF' é obrigatório!").test("CPF válido!", "CPF inválido!", value=>{
        if(!value) return false
        let sum = 0
        let remainder = 0
        value = value.replace(/[^\d]+/g, '')
        if(value.length > 11) return false
        if (
            value === '00000000000' ||
            value === '11111111111' ||
            value === '22222222222' ||
            value === '33333333333' ||
            value === '44444444444' ||
            value === '55555555555' ||
            value === '66666666666' ||
            value === '77777777777' ||
            value === '88888888888' ||
            value === '99999999999'
          ) return false;
            
          for (let i = 1; i <= 9; i++) sum += parseInt(value.substring(i - 1, i)) * (11 - i);
          remainder = (sum * 10) % 11;
          if (remainder === 10 || remainder === 11) remainder = 0;
          if (remainder !== parseInt(value.substring(9, 10))) return false
          sum = 0
          for (let i = 1; i <= 10; i++) sum += parseInt(value.substring(i - 1, i)) * (12 - i);
          remainder = (sum * 10) % 11;
          if (remainder === 10 || remainder === 11) remainder = 0
          if (remainder !== parseInt(value.substring(10, 11))) return false;
          return true
    }),
    telephone: yup.string().required("O campo 'Seu telefone' é obrigatório!").test("Telefone válido!", "Telefone inválido!", value => !(value.replace(/[^\d]+/g, '').length < 10)),
    cep: yup.string().required("O campo 'Seu CEP' é obrigatório!").test("CEP válido!", "CEP inválido!", value=> !(value.replace(/[^\d]+/g, '').length < 8) ),
    typeOfAddress: yup.string().required("O campo 'Tipo de endereço' é obrigatório!"),
    nameOfStreet: yup.string().required("O campo 'Nome da Rua' é obrigatório!").min(2, "'Nome da rua' deve conter no minimo 2 caracteres!").max(30, "'Nome da rua' deve conter no máximo 30 caracteres!"),
    number: yup.string().required("O campo 'Número' é obrigatório!"),
    neighborhood: yup.string().required("O campo 'Bairro' é obrigatório!").min(2, "'Bairro' deve conter no minimo 2 caracteres!").max(30, "'Bairro' deve conter no máximo 30 caracteres!"),
    complement: yup.string().max(40, "'Complemento' deve conter no máximo 40 caracteres!"),
    state: yup.string().required("Obrigatório!"),
    city: yup.string().required("Obrigatório!"),
    referencePoint: yup.string().max(100, "'Ponto de referência' deve conter no máximo 40 caracteres!"),
    email: yup.string().required("O campo 'E-mail' é obrigatório!").email("E-mail inválido"), 
    password: yup.string().required("O campo 'Senha' é obrigatório!").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'A senha deve conter pelo menos 8 caracteres, contendo ao menos, uma letra minuscula, uma letra maiscula e um número. ')
})




const productSchema = yup.object().shape({
    cover: yup.string().required("Você precisa adionar uma foto a capa do seu produto!"),
    title: yup.string().required("O campo 'Título do produto' é obrigatório!").max(100, "O titulo não pode ter mais de 50 caracteres!"),
    articleType: yup.string().required(),
    freight: yup.string().required(),
    previousValue: yup.string().required("O campo 'Valor anterior' é obrigatório!"),
    value: yup.string().required("O campo 'Valor atual' é obrigatório!"),
    installments: yup.string().required("O campo 'Parcelas no cartão sem juros' é obrigatório!"),
    description: yup.string().required("O campo 'Descrição do produto' é obrigatório!"),
    images: yup.array(),
    brand: yup.string().required("O campo 'Marca do produto' é obrigatório!"),
    indicatesTo: yup.string().required("O campo 'Indicado para' é obrigatório!"),
    gender: yup.string().required("O campo 'Genéro' é obrigatório!"),
    stock: yup.string().required("O campo 'Estoque' é obrigatório!"),
})


const cardSchema = yup.object().shape({
    numberCard: yup.string().required("O campo 'Número do cartão' é obrigátorio!").test("Número do cartão válido!", "Número do cartão não é válido!", (value)=>{
        const isValidCardNumber = cardNumber(value).isValid;
        console.log(isValidCardNumber)
        return false
    }),
    nameCardHolder: yup.string().required("O campo 'Título do produto' é obrigatório!").max(100, "O titulo não pode ter mais de 50 caracteres!"),
    expiryMonth: yup.string().required(),
    expiryYear: yup.string().required(),
    cvv: yup.string().required("O campo 'Valor anterior' é obrigatório!"),
    saveCard: yup.string().required("O campo 'Valor atual' é obrigatório!"),
    installment: yup.string().required("O campo 'Parcelas no cartão sem juros' é obrigatório!"),
})


export {loginSchema, registerSchema, productSchema, cardSchema}