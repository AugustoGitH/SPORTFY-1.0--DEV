
import {HeaderStyled, InputSearchStyled, FavoriteButtonStyled, UserButtonStyled, CartButtonStyled} from "./styles"

import { useState, useEffect } from "react"

import { Link, useNavigate } from "react-router-dom"
import {motion} from "framer-motion"


import SearchBar from "./components/SearchBar"
import CartButton from "./components/CartButton"
import NavigatorUser from "./components/NavigatorUser"


import {checkIfToken as checkForRoutesToken} from "../../requestsAPI/checkForRoutes/public"


export default function Header({searchBar=true, navUser = true, cart = true, fixed=true, onSearch=()=>{}}){
    const [loggedInfos, setLoggedInfos ] = useState({ logged: false, name: null, productsInTheCart: 0, admin: false })
    const navigate = useNavigate()


    useEffect(()=>{
        checkForRoutesToken({dataReq: true}).then(data=> {
            setLoggedInfos({ logged: data.user, name: data.data?.name, admin: data.admin })
        })
    }, [])

    return (
        <HeaderStyled style={{position: fixed ? "sticky" : ""}}>
            <div className="content">
                <Link className="title" to="/"><h1>Sportify</h1></Link>
                { searchBar && <SearchBar onSearch={onSearch}/> }

                <nav style={ {display: "flex", alignItems: "center"} }>
                    <NavigatorUser navigate={navigate} navUser={navUser} logged={loggedInfos} style={{marginRight: "2rem"}}/>
                    <CartButton navigate={navigate} cart={cart}/>
                </nav>
            </div>
        </HeaderStyled>
    )
}