import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


import {NotItemsCartStyled, Container} from "./styles"

import Header from "../../components/Header"
import Input from "../../components/Input"

import CardInCart from "./components/CardProductInCart"
import CardPuschase from "./components/CardPurchase";

 



export default function PageCart() {
  const [productsInTheCart, setProductsInTheCart] = useState(JSON.parse(localStorage.getItem("productsInTheCart")) || [])

  const [infosPurchaseValues, setInfosPurchaseValues] = useState(updatePurchaseValuesStorage(productsInTheCart))

  function updatePurchaseValuesStorage(products){
    if(products.length === 0 || !Array.isArray(products)) return {
      subTotal: 11,
      freigth: 11,
      valueTotal: 11
    }
    
    const sumValues = products.map(prod=> prod.value.valueTotal).reduce((prev, current)=> current + prev)

    return {
      subTotal: sumValues,
      freigth: 17.90,
      valueTotal: sumValues +  17.90
    }
  }

  const NotItemsCart = () => {
    return ( <NotItemsCartStyled>
        <div className="container-icon"><i className='bx bxs-cart-alt'></i></div>
        <h4>Seu carrinho está vazio</h4>
        <p>Adicione produtos clicando no botão "Adicionar ao carrinho" na página de produto.</p>
        <Link to="/">Voltar para a página inicial</Link>
    </NotItemsCartStyled>)
  };

  useEffect(()=>{
    if(productsInTheCart.length > 0){
      localStorage.setItem("productsInTheCart", JSON.stringify(productsInTheCart))
    }
  }, [productsInTheCart])
  
  function trashItem(idItem){
    setProductsInTheCart(products=>{
      const productsUpdate = products.filter(prod=> prod._id !== idItem)
      setInfosPurchaseValues(updatePurchaseValuesStorage(productsUpdate))
      return productsUpdate
    })
  }
  function onChangeValueProducts(newProducts){
    setInfosPurchaseValues(updatePurchaseValuesStorage(newProducts))
  }


  const FieldInputCEP = ()=>{
    const CEP = JSON.parse(localStorage.getItem("cep")) || ""
    return (
        <div className="input-field">
            <Input variant="filled" size="small" label="Digite aqui seu CEP" preValue={CEP}/>
            <button>Calcular</button>
        </div>
    )
  }



  return (
    <div>
    <Header cart={false} />
    <Container>
      {productsInTheCart.length > 0 ? (
        <div className="content">
          <div className="my-cart">
            <h2>Meu carrinho</h2>
            <ul>
              {productsInTheCart.map((pr, i) => (<CardInCart productsInTheCart={productsInTheCart} product={pr} key={i} onTrash={trashItem} onChangeValues={onChangeValueProducts}/>))}
            </ul>
            <div className="field-simulate-freigth">
              <h3>Simule frete e prazo de entrega</h3>
              <FieldInputCEP/>
            </div>
          </div>
          <div className="purchase-summary">
            <h2>Resumo da compra</h2>
            <CardPuschase infosPurchaseValues={infosPurchaseValues} />
          </div>
        </div>
      ) : (
        <div className="content">
          <NotItemsCart/>
        </div>
      )}
    </Container>
  </div>
  );
}