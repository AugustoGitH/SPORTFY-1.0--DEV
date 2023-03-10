
import {CardStyled, StarsAvaliationStyled} from "./styles"

import iconBolaDeBasquete from "../../assets/icons/bola-de-basquete-white.png"
import iconBolaDeFutebol from "../../assets/icons/bola-de-futebol-white.png"
import iconBolaDeVolei from "../../assets/icons/bola-de-volei-white.png"
import iconNatacao from "../../assets/icons/silhueta-de-natacao-white.png"

import Rating from "../Rating"
import { useNavigate } from "react-router-dom"


const articlesSport = [
    {
        article: "volleyball",
        icon: iconBolaDeVolei
    },
    {
        article: "football",
        icon: iconBolaDeFutebol
    },
    {
        article: "basketball",
        icon: iconBolaDeBasquete
    },
    {
        article: "swimming",
        icon: iconNatacao
    }
]


export default function CardProduct({card, clickable = true ,...rest}){
    if(!card || typeof card !== "object") return null
    const {
        articleType = "",
        cover = "",
        title = "",
        avaliation = 0,
        freight = "",
        previousValue = 0,
        value = 0,
        installments = 1
      } = card
      
    const selectedArticleIcon = articlesSport.find(art=> art.article === articleType).icon

    const templates = {
        cover: cover || "https://www.cantinacheirodepizza.com.br/content/images/thumbs/default-image_800.png",
        title: title || "Capriche no título do seu produto, tornando-o apelativo e chamativo para seus clientes!",
        freight: freight === "free" ? "Frete Grátis" : "",
        installments: installments > 1 ? `ou ${installments}x de R$ ${(value / installments).toFixed(2).replace(".", ",")}` : "",
        previousValue: `R$ ${previousValue.toFixed(2).replace(".", ",")}`,
        value: `R$ ${value.toFixed(2).replace(".", ",")}`,
    }

    const navigate = useNavigate()

    const handleClickCard = (id)=>{
        clickable ? navigate(`/product-view/${id}`) : null
    }



    return (
        <CardStyled {...rest} onClick={()=> handleClickCard(card.id)} >
            <span className="stamp"><img src={selectedArticleIcon}></img></span>
            <div className="container-image">
                <img src={templates.cover} alt={templates.title}></img>
            </div>
            <div className="description">
                <h3>{templates.title}</h3>
                <div className="infos-descriptions">
                    <Rating readOnly/>
                    <h4>{templates.freight}</h4>
                    <del style={{textDecoration: "line-through", display: "block"}}>{templates.previousValue}</del>
                    <span>{templates.value}</span>
                    <p>{templates.installments}</p>
                </div>
            </div>
        </CardStyled>
    )
}