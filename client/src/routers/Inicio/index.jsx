import {RangeStyled, SectionFilterStyled} from "./styles"


import React, { useEffect, useState } from 'react'


import Header from "../../components/Header"
import CarouselProducts from "../../components/CarouselProducts"
import Container from "../../components/Container"

import iconBolaDeBasquete from "../../assets/icons/bola-de-basquete-black.png"
import iconBolaDeFutebol from "../../assets/icons/bola-de-futebol-black.png"
import iconBolaDeVolei from "../../assets/icons/bola-de-volei-black.png"
import iconNatacao from "../../assets/icons/silhueta-de-natacao-black.png"

import mostProducts from "../../requestsAPI/products/mostProducts"

export default function Home(){
    useEffect(()=>{ window.document.title = "Sportify" }, [])

    const NavigateFilters = ()=>{
        return (
            <SectionFilterStyled>
            <div className="circle-model">
                <img src={iconBolaDeBasquete} alt="bola-de-basquete"></img>
            </div>
            <div className="circle-model">
                <img src={iconBolaDeFutebol} alt="bola-de-basquete"></img>
            </div>
            <div className="circle-model">
                <img src={iconBolaDeVolei} alt="bola-de-basquete"></img>
            </div>
            <div className="circle-model">
                <img src={iconNatacao} alt="bola-de-basquete"></img>
            </div>
        </SectionFilterStyled>
        )
    }

    return (
        <div>
            <Header/>
            <RangeStyled>
                <h1><i className='bx bxs-bolt'></i>A paixão pelo esporte é o que nos move, a qualidade dos equipamentos é o que nos diferencia.</h1>
            </RangeStyled>
            <Container>
                <NavigateFilters/>
                    <div>
                        <CarouselProducts
                            requestProducts={mostProducts.popular}
                            title="Produtos mais populares"
                            iconTitle={<i className="bx bxs-purchase-tag-alt"></i>}
                        />
                        <CarouselProducts
                            requestProducts={mostProducts.sold}
                            title="Produtos mais vendidos"
                            iconTitle={<i className="bx bxs-purchase-tag-alt"></i>}
                        />
                    </div>
            </Container>
        </div>
    )
}
