
import {NavBuyCartFavStyled} from "../styles"

import React, {} from "react"
import { useNavigate } from "react-router-dom"

import {likeProduct as requestLikeProduct} from "../../../requestsAPI/actions"

export default function NavBuyCartFav({productInfos, options, onError = ()=>{}}){
    const navigate = useNavigate()
    console.log(productInfos)
    function handleClickAddCart(product){
        const {_id, cover, title, value, previousValue } = product
        const addProductsInLocalStorage = (product)=>{
            const productsInCart = JSON.parse(localStorage.getItem("productsInTheCart")) || []
            if(!productsInCart.find(pr=> pr._id === product._id)){
                productsInCart.push({...product, options})
                localStorage.setItem("productsInTheCart", JSON.stringify(productsInCart))
            }
            navigate("/cart")
        }
        const returnOptionRequired = (optionsReq)=>{
            const requireds = []
            for(let option in optionsReq) !optionsReq[option] ? requireds.push(option) : null
            return requireds
        }

        if(!Object.values(options).every(Boolean)) return onError(returnOptionRequired(options))
        addProductsInLocalStorage({_id, cover, title, previousValue: {preValOrigin: previousValue, preValTotal: previousValue}, quantity: 1, value: {valueOrigin: value, valueTotal: value}})

    }
    function handleFavoriteProduct(idProduct){
        const productsLikeInStorage = JSON.parse(localStorage.getItem("productsLikes")) || []
        if(!productsLikeInStorage.includes(idProduct)){
            requestLikeProduct(idProduct).then(response=>{
                const {error, message} = response
                if(!error){
                    productsLikeInStorage.push(idProduct)
                    localStorage.setItem("productsLikes", JSON.stringify(productsLikeInStorage))
                }else{
                    alert(message)
                }
            })
        }
    }
    const verifyProductLike = (idProduct)=>{
        const productsLikeInStorage = JSON.parse(localStorage.getItem("productsLikes")) || []
        return productsLikeInStorage.includes(idProduct)
    }
    return (
        <NavBuyCartFavStyled>
            <button onClick={()=> handleClickAddCart(productInfos)}><i className='bx bxs-purchase-tag'></i>Comprar</button>
            <button onClick={()=> handleClickAddCart(productInfos)}><i className='bx bxs-cart'></i>Adicionar ao Carrinho</button>
            <button onClick={()=> handleFavoriteProduct(productInfos._id)} className={`button-like ${verifyProductLike(productInfos._id) ? "button-marked-like" : ""}`}><i className='bx bxs-heart'></i></button>
        </NavBuyCartFavStyled>
    )
}