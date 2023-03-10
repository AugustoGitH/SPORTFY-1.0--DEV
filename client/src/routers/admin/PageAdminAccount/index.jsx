

import {Container, NavigationPainelStyled, SectionNavigationStyled} from "./styles"

import React, { useState } from "react";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "../../../components/Header/index";
import Breadcrumbs from "../../../components/Breadcrumbs"

import { logout } from "../../../requestsAPI/actions"

function NavigatorAccount(){
    const location = useLocation()
    const navigate = useNavigate()
    const LinkNavigator = ({path, location, name, iconLeft})=>{
        return (
            <Link to={path}><li className={path === location.pathname ? "mark-navigator" : ""}>{iconLeft}{name}</li></Link>
        )
    }

    return (
        <NavigationPainelStyled>
            <Breadcrumbs routes={ [
                        {
                            path: "/admin-account",
                            name: "Home"
                        },
                        {
                            path: "/dashboard",
                            name: "Dashboard"
                        },
                        {
                            path: "/products",
                            name: "Produtos"
                        },
                        {
                            path: "/stock",
                            name: "Estoque"
                        },
                        {
                            path: "/add-product",
                            name: "Adicionar produto"
                        }
            ]}/>
            <ul>
                <LinkNavigator path="/admin-account/dashboard" location={location} name="Dashboard" iconLeft={<i className='bx bxs-dashboard'></i>}/>
                <LinkNavigator path="/admin-account/products" location={location} name="Produtos" iconLeft={<i className='bx bxl-product-hunt'></i>}/>
                <LinkNavigator path="/admin-account/add-product" location={location} name="Adicionar produto" iconLeft={<i className='bx bxs-message-square-add'></i>}/>
                <LinkNavigator path="/admin-account/stock" location={location} name="Estoque" iconLeft={<i className='bx bxs-store-alt'></i>}/>
                <button onClick={()=> logout(navigate)}><li><i className='bx bx-log-out'></i>Sair</li></button>
            </ul>
        </NavigationPainelStyled>
    )
}

export default function PageAdminAccount(){
    return (
        <div>
            <Header/>
            <Container>
                <div className="content">
                    <div className="painel">
                        <NavigatorAccount/>
                        <Outlet/>
                    </div>
                </div>
            </Container>
        </div>
    )
}