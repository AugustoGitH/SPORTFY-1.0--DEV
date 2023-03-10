
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Input from "../../../components/Input"
import Form from "../../../components/Form"
import PopUpLoad from "../../../components/PopUpLoad"

import {loginSchema} from "../../../formRelatedMethods/schemas/form"

import {login as loginRequest} from "../../../requestsAPI/actions"


export default function CardLogin(){
    const [errorMessage, setErrorMessage] = useState(null)
    const [loadingResponse, setLoadingResponse] = useState(false)
    const [sucessLogin, setSucessLogin] = useState(false)

    const navigation = useNavigate()

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = (data)=>{
        setLoadingResponse(true)
        loginRequest(data).then(response=>{
            const {error, data, message} = response

            if(error){
                setLoadingResponse(false)
                setErrorMessage(message)
                return setTimeout(()=> setErrorMessage(null), 4000)
            }
            else if(data){
                const retrievedUserInfo = data.infosUser ? { cep: data.infosUser.cep, email: data.infosUser.email } : {}
                localStorage.setItem("cep", JSON.stringify(retrievedUserInfo.cep))
                localStorage.setItem("email", JSON.stringify(retrievedUserInfo.email))
            }

            setTimeout(()=> setSucessLogin(true), 2000)
        })
    }


    return (
        <div className="card-login">

            <PopUpLoad show={loadingResponse} over={sucessLogin} whenFinished={{
                messageToTop: "Seu login foi realizado com sucesso!",
                functionClickButton: ()=> navigation("/"),
                writtenButton: "Agora vamos para as compras"
            }}/>


            <h3>Já sou cliente</h3>
            <Form onSubmit={handleSubmit(handleLogin)} buttonSubmit={<button className="button-submit">ACESSAR CONTA</button>} errorMessage={errorMessage}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input label="E-mail" className="input-card" onChange={onChange} color="primary" variant="filled" error={!!errors.email} helperText={errors.email?.message}/>
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange } }) => (
                        <Input label="Senha" type="password" className="input-card" color="primary" variant="filled" onChange={onChange} error={!!errors.password} helperText={errors.password?.message}/>
                    )}
                />
                <Link style={{ textDecoration: "underline", fontSize: ".8rem", marginBottom: "2rem", display: "inline-block"}}>Esqueci minha senha</Link>
            </Form>
        </div>
    )
}
