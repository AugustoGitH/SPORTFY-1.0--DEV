import {Container, NavigationPainelStyled, SectionNavigationStyled} from "./styles"

import React, { useState } from "react";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs"

import { logout } from "../../requestsAPI/actions"

function NavigatorAccount(){
    const location = useLocation()
    const navigate = useNavigate()
    function LinkNavigator({path, location, name, iconLeft}){
        return (
            <Link to={path}><li className={path === location.pathname ? "mark-navigator" : ""}>{iconLeft}{name}</li></Link>
        )
    }

    return (
        <NavigationPainelStyled>
            <Breadcrumbs routes={ [
                        {
                            path: "/new-account",
                            name: "Home"
                        },
                        {
                            path: "/my-orders",
                            name: "Pedidos"
                        },
                        {
                            path: "/my-exchanges",
                            name: "Trocas"
                        },
                        {
                            path: "/my-vouchers",
                            name: "Vales"
                        },
                        {
                            path: "/my-personal-info",
                            name: "Seus dados"
                        },
                        {
                            path: "/my-addresses",
                            name: "Endereços"
                        },
                        {
                            path: "/my-cards",
                            name: "Cartões salvos"
                        },
                        {
                            path: "/preferences-center",
                            name: "Central de preferências"
                        }
            ]}/>
            <ul>
                <LinkNavigator path="/new-account/my-orders" location={location} name="Pedidos" iconLeft={<i className='bx bxs-truck'></i>}/>
                <LinkNavigator path="/new-account/my-exchanges" location={location} name="Trocas" iconLeft={<i className='bx bx-repost'></i>}/>
                <LinkNavigator path="/new-account/my-vouchers" location={location} name="Vales" iconLeft={<i className='bx bx-money'></i>}/>
                <LinkNavigator path="/new-account/my-personal-info" location={location} name="Seus dados" iconLeft={<i className='bx bxs-user-circle' ></i>}/>
                <LinkNavigator path="/new-account/my-addresses" location={location} name="Endereços" iconLeft={<i className='bx bxs-home-alt-2' ></i>}/>
                <LinkNavigator path="/new-account/my-cards" location={location} name="Cartões salvos" iconLeft={<i className='bx bxs-credit-card-front' ></i>}/>
                <LinkNavigator path="/new-account/preferences-center" location={location} name="Central de preferências" iconLeft={<i className='bx bxs-star'></i>}/>
                <button onClick={()=> logout(navigate)}><li><i className='bx bx-log-out'></i>Sair</li></button>
            </ul>
        </NavigationPainelStyled>
    )
}

export default function PageAccount(){
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