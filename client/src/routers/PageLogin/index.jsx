import { SectionLoginStyled } from "./styles"

import React from "react";

import Header from "../../components/Header"
import Container from "../../components/Container"

import CardEnterRegistry from "./components/CardEnterRegistry"
import CardLogin from "./components/CardLogin"



export default function PageLogin(){
    return (
        <div>
            <Header searchBar={false} navAccess={false} fixed={false}/>
            <Container>
                <SectionLoginStyled>
                    <CardLogin/>
                    <div className="line-vertical"></div>
                    <CardEnterRegistry/>
                </SectionLoginStyled>
            </Container>
        </div>
    )
}
