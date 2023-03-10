import {mask, unMask} from "remask"

const formats = {
    cpf: (value)=>{
        return mask(value, ["999.999.999-99"])
    },
    telefone: (value)=>{
        return mask(value, ["(99) 9999-99999"])
    },
    cep: (value)=>{
        return mask(value, ["99999-999"])
    }
}

export default formats