

import {motion} from "framer-motion"

import { useState, useEffect } from "react"
import {CartButtonStyled} from "../styles"
import { Link } from "react-router-dom"

export default function CartButton({ cart, navigate, ...rest }){
    const productsInTheStorage = JSON.parse(localStorage.getItem("productsInTheCart")) || []
    const [showCart, setShowCart] = useState(false)


    const PreviewProductsCart = ()=>{
        const productsInTheStorage = JSON.parse(localStorage.getItem("productsInTheCart"))
        const subTotal = productsInTheStorage.map(prod=> prod.value.valueTotal).reduce((current, prev)=> prev + current)
        const installments = subTotal / 4
        console.log(subTotal)
        return (
            <div>
                <ul>
                {
                    productsInTheStorage.map((prod, i)=> <li key={i}>
                        <img src={prod.cover}/>
                        <span>{prod.title}</span>
                        <span><b>R${prod.value.valueTotal.toFixed(2).replace(".", ",")}</b></span>
                    </li>)
                }
                </ul>
                <hr/>
                <div className="subtotal-products">
                    <span>Sub-total</span>
                    <h3>R$ {subTotal.toFixed(2).replace(".", ",")}</h3>
                </div>
                <p>ou sem juros em até 4x de R$ {installments.toFixed(2).replace(".", ",")}</p>
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        )
    }

    const PopUpCart = ({show})=>{
        return (show?
            <motion.ul 
                className="popUp-cart"
                initial={{ y: -200, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0.5 }}
                transition={{duration: 0.4}}
            >
               {productsInTheStorage.length === 0 ? (<span style={{all: "unset", display: "inline-block", textAlign: "center", width: "200px"}}>O seu carrinho está vazio!</span>) : (
                <PreviewProductsCart/>
               )}

            </motion.ul>
        :<></>)
    }


    return (cart && (
        <CartButtonStyled onMouseLeave={()=> setShowCart(false)} onMouseEnter={()=> setShowCart(true)}  { ...rest }>
            <div className="button-cart" onClick={()=> navigate("/cart")}>
                <i className='bx bxs-cart-alt'></i>
                <span className="quantity-items">{ productsInTheStorage.length }</span>
            </div>
            <PopUpCart show={showCart}/>
        </CartButtonStyled>
    ))
}