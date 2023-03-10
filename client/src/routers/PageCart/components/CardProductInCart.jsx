import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";



function FieldProductValueControl({product, productsInTheCart, productInTheCart, onChange = ()=>{}}){
    const [quantityProduct, setQuantityProduct] = useState(productInTheCart.quantity)
    
    const [valueProduct, setValueProduct] = useState(productInTheCart.value)
    const [previousValueProduct, setPreviousValueProduct] = useState(productInTheCart.previousValue)
  
    const [some, setSome] = useState(false)
    const [subtract, setSubtract] = useState(false)
    
    useEffect(()=>{
      if(some){
        setValueProduct(val=> ({...val, valueTotal: val.valueOrigin + val.valueTotal }))
        setPreviousValueProduct(prevVal=> ({...prevVal, preValTotal: prevVal.preValOrigin + prevVal.preValTotal }))
      }
      if(subtract){
        setValueProduct(val=> ({...val, valueTotal: val.valueTotal - val.valueOrigin}) )
        setPreviousValueProduct(prevVal=> ({...prevVal, preValTotal: prevVal.preValTotal - prevVal.preValOrigin}))
      }
    }, [quantityProduct])
  
    useEffect(()=>{
      updateProductInStorage({
          product,
          valueProduct, previousValueProduct, quantity: quantityProduct
      })
    }, [valueProduct, previousValueProduct])




    const subtractQuantity = ()=> {
      setSome(false)
      setSubtract(true)
      if(quantityProduct > 1){
        setQuantityProduct(quantity=> --quantity)
      }
    }
  
    const addQuantity = ()=> {
      setSubtract(false)
      setSome(true)
      if(quantityProduct < 4 ){
        setQuantityProduct(quantity=> ++quantity )
      }
    }
    
    const updateProductInStorage = (itensInTheProduct)=>{
      const {product, valueProduct, previousValueProduct, quantity } = itensInTheProduct

      const newProduct = {
          ...product,
          value: valueProduct,
          previousValue: previousValueProduct,
          quantity,
      }

      const copyProductsInTheCart = productsInTheCart.slice()
      copyProductsInTheCart.splice(copyProductsInTheCart.findIndex(prod=> prod._id === productInTheCart._id), 1, newProduct)

      localStorage.setItem("productsInTheCart", JSON.stringify(copyProductsInTheCart))
      onChange(copyProductsInTheCart)
    }


    return (
      <div className="field-product-value">
        <div className="control-quantity-field">
          <span>Quantidade:</span>
          <div className="control-quantity">
            <button onClick={addQuantity}> <i className="bx bx-plus"></i></button>
            <div className="quantity-view">{quantityProduct}</div>
            <button onClick={subtractQuantity}>-</button>
          </div>
        </div>
        <p>
          <del>R$ {(previousValueProduct.preValTotal).toFixed(2).replace(".", ",")}</del>
          <span>
            <b>R$ {(valueProduct.valueTotal).toFixed(2).replace(".", ",")}</b>
          </span>
        </p>
      </div>
    );
}



export default function CardInCart({product, onTrash = ()=>{}, productsInTheCart, onChangeValues=()=>{}}){
    const productInTheCart = productsInTheCart.find(prod=> prod._id === product._id)
  
  
    function trashProductInCart(){
      const copyProductsInTheCart = productsInTheCart.slice()
      copyProductsInTheCart.splice(copyProductsInTheCart.findIndex(prod=> prod._id === productInTheCart._id), 1)

      localStorage.setItem("productsInTheCart", JSON.stringify(copyProductsInTheCart))
      onTrash(productInTheCart._id)

    }
  
    return (
                  <li>
                      <button className="trash-button" onClick={trashProductInCart}><i className='bx bxs-trash-alt'></i></button>
                      <div className="product-cart">
                        <img src={product.cover} />
                        <article>
                          <h4>{product.title}</h4>
                          <span>Vendido por <Link to="/">Sportfy</Link></span>
                          <span>Entregue por <Link to="/">Sportfy</Link></span>
                          <div className="table-options">
                            {product.options.colors && (
                              <span><b>Cor: </b>{product.options.colors}</span>
                            )}
                            {product.options.clothingSizes && (
                              <span><b>Tamanho: </b>{product.options.clothingSizes}</span>
                            )}
                            {product.options.shoeSizes && (
                              <span><b>Tamanho: </b>{product.options?.shoeSizes}</span>
                            )}
                          </div>
                        </article>
                      </div>
  
                      <div className="line-horizontal"></div>
  
                      <div className="display-product-control">
                        <FieldProductValueControl onChange={onChangeValues} idProduct={product._id} product={product} productsInTheCart={productsInTheCart} productInTheCart={productInTheCart}/>
                        <Link>Ver mais produtos dessa loja</Link>
                      </div>
                    </li>
    )
  }
  
  