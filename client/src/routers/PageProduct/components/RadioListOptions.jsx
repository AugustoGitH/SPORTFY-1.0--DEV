
import { useEffect, useState, useRef } from 'react';

import {RadioListOptionsStyled} from "../styles"

export default function ListOptions({options, label, required = [], name, onChange = ()=>{}, show}){
    const [isError, setIsError] = useState(false)
    const list = useRef()
    const [option, setOption] = useState("")
    useEffect(()=>{
        if(option){
            onChange({options: name, select: option})
        }
    }, [option])
    useEffect(()=>{
        if(required.length > 0 && required.includes(name) ){
            setIsError(true)
            setTimeout(()=> setIsError(false), 500 )
        }
    }, [required])

    function handleClickOption(ev){
        list.current.querySelectorAll("li").forEach(li=> li.classList.remove("marked-option"))
        ev.target.classList.add("marked-option")
        setOption(ev.target.id.toLowerCase())
    }
    return (show && (
        <RadioListOptionsStyled error={isError}>
            <span>{label}</span>
            <ul ref={list}>
            { options?.map((color, i)=> <li key={i} id={color} onClick={handleClickOption} >{color}</li>) }
            </ul>
        </RadioListOptionsStyled>
    ))
}
