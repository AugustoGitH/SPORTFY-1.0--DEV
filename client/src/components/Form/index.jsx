import { useEffect, useState } from "react"
import {CardMessage} from "./styles"

export default function Form({children, buttonSubmit, errorMessage, ...rest}){
    function CardAlert({message}){
        return (<CardMessage>{message}<i className='bx bxs-error-circle'></i></CardMessage>)
    }
    return (
        <form {...rest}>
            {children}
            {errorMessage?
                <CardAlert message={errorMessage}/>
            :<></>}
            {buttonSubmit}
        </form>
    )
}