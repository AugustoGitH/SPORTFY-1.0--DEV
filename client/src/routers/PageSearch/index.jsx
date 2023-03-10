
import {Outlet} from "react-router-dom";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { SearchContext } from "../../contexts/searchContext";

import {PageSearchStyled} from "./styles"
import CardProduct from "../../components/ProductPreview";
import SkeletonProductPreview from "../../components/ProductPreviewSkeleton";

import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom";

import searchProductsRequest from "../../requestsAPI/products/search"

function generateSketonCards(numberCards){
    const cards = []
    for(let i = 1; i <= numberCards; i++) cards.push(<SkeletonProductPreview key={i}/>)
    return cards
}

function transformQueryInObject(query){
    const objectReturn = {}
    query.replace(/\?/g, "").split("&").forEach(pr=>{
        const [key, prop] = pr.split("=")
        objectReturn[key] = prop?.replace(/%20/g, " ").replace(/%/g, "")
    })
    return objectReturn
}


export default function PageSearch(){
    const location = useLocation()
    const query = location.search
    const [search, setSearch] = useState(transformQueryInObject(query).charactersSearched || "")
    const [productsSearch, setProductsSearch] = useState([])
    const [productsSkeleton, setProductsSkeleton] = useState(generateSketonCards(6))
    useEffect(()=>{
        searchProductsRequest(query).then(products=>{
            if(products){
                setProductsSkeleton([])
                setProductsSearch(products.map((prod, index)=> (<CardProduct card={prod} key={index}/>)))
            }
        })
    }, [search])
    return (
        <div>
            <Header onSearch={setSearch}/>
            <Container>
                <PageSearchStyled>
                    <h2>Resultado de busca para "{search}"</h2>
                    <div className="products-list">
                        {productsSearch}
                        {productsSkeleton}
                    </div>
                </PageSearchStyled>
            </Container>
        </div>
    )
}