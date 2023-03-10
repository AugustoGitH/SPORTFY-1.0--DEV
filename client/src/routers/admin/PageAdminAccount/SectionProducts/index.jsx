import {SectionNavigationStyled, AwayMessageStyled} from "../styles"
import {SectionProductsStyled, ListProductsStyled} from "./styles"

import InputWithIcon from "../../../../components/InputWithIcon"
import Rating from "../../../../components/Rating"

import SearchIcon from '@mui/icons-material/Search';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import requestAdmin from "../../../../requestsAPI/admin/actions"
import { useEffect, useState } from "react";


function generateSketonCards(numberCards){
    const ProductSheetSkeleton = ({})=>{
        return (
            <Stack spacing={0.5} direction="row" style={{width: "100%", height: "150px", marginBottom: "1rem"}}>
                <Skeleton variant="rounded" width={"30%"} height={"100%"}/>
                <div style={{width: "70%", paddingLeft: "1rem"}}>
                    <Skeleton variant="text" sx={{ fontSize: '.9rem' }} width={"100%"}/>
                    <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={"100%"} style={{marginTop: ".2rem"}}/>
                    <div style={{display: "flex", alignItems: "flex-start", margin: "1rem 0"}}>
                        <Skeleton variant="rounded" width={100} height={30}/>
                        <Skeleton variant="rounded" width={100} height={30} style={{marginLeft: "1rem"}}/>
                    </div>
                    <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={130} style={{marginTop: ".2rem"}}/>
                    <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={160} style={{marginTop: ".2rem"}}/>
                </div>
            </Stack>)
    }

    const cards = []
    for(let i = 1; i <= numberCards; i++) cards.push( <ProductSheetSkeleton key={i}/> )
    return cards
}

function ListProductsSheet({products}){
    const [sheetsSkeleton, setSheetsSkeleton] = useState( generateSketonCards(3) )
    
    useEffect(()=>{
        if(products.length > 0){
            setSheetsSkeleton([])
        }
    }, [products])

    const ProductSheet = ({product, index, ...rest})=>{
        const delay = `${(index + 1)}00ms`
        return (
            <li style={{"--delay": delay}}  {...rest}>
                <div className="image-container">
                    <img src={product.cover}></img>
                </div>
                <article>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <ul className="display-statistics">
                        <span>{product.views} visualizações <i className='bx bxs-show'></i></span>
                        <span>{product.likes.length} curtidas <i className='bx bxs-heart'></i></span>
                    </ul>
                    <span className="avaliations"><Rating size="small" valueDefault={0} readOnly/> <span className="quantity"> {product.avaliation.length} avaliações</span></span>
                </article>
                {/* <span className="publisher-email">augustoc.westphal@gmail.com</span> */}
            </li>
            
        )
    }
    return (
        <ListProductsStyled>
            { products.map((prod, index)=> (<ProductSheet index={index} product={prod} key={index}/>)) }
            { sheetsSkeleton }
        </ListProductsStyled>
    )
}



export default function SectionProducts(){
    const [infosProduct, setInfosProduct] = useState([])
    const [sheetSearch, setSheetSearch] = useState([])
    useEffect(()=>{
        requestAdmin.getProducts().then(products=>{
            setInfosProduct(products)
            setSheetSearch(products)
        })
    }, [])
    const changeSearch = (ev)=>{
        const filtered = infosProduct.filter(prod=>{
            const regex = new RegExp(ev.target.value.toLowerCase().normalize("NFD"), "gi")
            return regex.test(prod.title.toLowerCase().normalize("NFD"))
        })
        setSheetSearch(filtered)
    }
    return (
        <SectionNavigationStyled>
             <h1>Produtos</h1>
             <div className="card-content">
                <SectionProductsStyled>
                    <InputWithIcon onChange={changeSearch} Icon={SearchIcon} label="Pesquisar produto"/>
                    <ListProductsSheet products={sheetSearch}/>
                </SectionProductsStyled>
             </div>
        </SectionNavigationStyled>
    )
}