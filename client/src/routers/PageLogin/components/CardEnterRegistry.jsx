
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Input from "../../../components/Input"
import Form from "../../../components/Form"

import {emailSchema} from "../../../formRelatedMethods/schemas/input"

import {email as emailRequest} from "../../../requestsAPI/actions"


export default function CardEnterRegistry(){
    const [ emailAlertMessage, setEmailAlertMessage ] = useState(null)
    const navigation = useNavigate()

    const { control, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(emailSchema)});

    const openFormRegistry = (data)=>{
        emailRequest(data.email).then(response=>{
            const {message, valid} = response

            if(!valid){
                setEmailAlertMessage(message)
                setTimeout(()=> setEmailAlertMessage(null), 3000)
            }
            else{
                navigation("/auth/register/natural") 
                localStorage.setItem("email", data.email)
            }
        })
    }

    return (
        <div className="card-register">
            <h3>Criar conta</h3>
            <Form onSubmit={handleSubmit(openFormRegistry)} buttonSubmit={<button className="button-submit">PROSSEGUIR</button>}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input label="E-mail" className="input-card" onChange={onChange} color="primary" variant="filled" error={errors.email || emailAlertMessage ? true : false} helperText={errors.email ? errors.email.message : emailAlertMessage ? emailAlertMessage : ""}/>
                    )}
                />
            </Form>
        </div>
    )
}