
import { useState, useEffect } from "react"
import {InputSearchStyled} from "../styles"
import { useLocation, useNavigate } from "react-router-dom"


function transformQueryInObject(query){
    const objectReturn = {}
    query.replace(/\?/g, "").split("&").forEach(pr=>{
        const [key, prop] = pr.split("=")
        objectReturn[key] = prop?.replace(/%20/g, " ").replace(/%/g, "")
    })
    return objectReturn
}

export default function SearchBar({onSearch}){
    //?searchType={}&searchScope={}&charactersSearched={}
    const location = useLocation()

    const [inFocus, setInFocus] = useState(false)
    const [value, setValue] = useState(transformQueryInObject(location.search).charactersSearched || "")
    const navigation = useNavigate()
    const styleFocus = { transform: "scale(1.1)", background: "#fff" }

    function handleClickSearch(){
        if(value){
            navigation(`/search?searchType=normal&searchScope=global&charactersSearched=${value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')}`)
            onSearch(value)
        }
    }

    return (
        <InputSearchStyled style={ inFocus ? styleFocus : {} }>
            <input onChange={ev=> setValue(ev.target.value)} value={value} onBlur={()=> setInFocus(false)} onFocus={()=> setInFocus(true)}></input>
            <button onClick={handleClickSearch}><i className='bx bxs-search-alt-2'></i></button>
        </InputSearchStyled>
    )
}