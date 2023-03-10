import { useState, useEffect } from "react"
import {UserButtonStyled} from "../styles"

import {motion} from "framer-motion"

import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../../requestsAPI/actions"

export default function NavigatorUser( { logged, navigate, navUser, ...rest } ){
    const name = logged ? logged.name : null
    const [appearLinks, setAppearLinks] = useState(false)


    function LinksNavigation({show, logged}){
        const linksDefault = [
            {url: "/auth/login", name: "Login / Register"}, {url: "/new-account/my-orders", name: "Meus pedidos"}, {url: "/new-account/my-addresses", name: "Endereços"}
        ]
        const linksUser = [
            {url: "/new-account", name: "Minha conta"}, {url: "/new-account/my-orders", name: "Meus pedidos"}, {url: "/new-account/my-addresses", name: "Endereços"}, {url: "/new-account/preferences-center", name: "Central de preferências"},  <button key="close" onClick={()=> logout(navigate)}>Sair</button> 
        ]
        const linksAdmin = [
            {url: "/admin-account", name: "Minha conta"}, {url: "/admin-account/dashboard", name: "Dashboard"}, {url: "/admin-account/products", name: "Produtos"}, {url: "/admin-account/stock", name: "Estoque"}, <button key="close" onClick={()=> logout(navigate)}>Sair</button>
        ]
        const listRender = !logged.logged ? linksDefault : !logged.admin ? linksUser : linksAdmin
        return (show?
            <motion.ul 
                className="popUp-user"
                initial={{ y: -200, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0.5 }}
                transition={{duration: 0.4}}
            >
                {
                    listRender.map((link, i)=> link.$$typeof ? link : <Link to={link.url} key={i}><li>{link.name}</li></Link>)
                }
            </motion.ul>
        :<></>)
    }

    return (navUser && (
        <UserButtonStyled  onMouseLeave={()=> setAppearLinks(false)} onMouseEnter={()=> setAppearLinks(true)} { ...rest } >
            <i className='bx bxs-user icon-user'></i>
            <span>{!name ? "Entrar" : `Olá, ${name}`}</span>
            <i className='bx bx-chevron-down icon-arrow' style={{transform: appearLinks ? "rotate(180deg)" : "rotate(0deg)"}}></i>
            <LinksNavigation show={appearLinks} logged={logged}/>
        </UserButtonStyled>
    ))
}