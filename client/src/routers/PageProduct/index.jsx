import {Container, VisualShowCaseStyle, LoadedPopUpStyled} from "./styles"

import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import requestProduct from "../../requestsAPI/products/product"
import {viewProduct as requestViewProduct} from "../../requestsAPI/actions"

import Header from "../../components/Header"
import Rating from "../../components/Rating";
import Loaded from "../../components/CircularDetermine"



import VisualShowCase from "./components/VisualShowCase";
import RadioListOptions from "./components/RadioListOptions"
import FieldFreight from "./components/FieldFreight";
import Specifications from "./components/Specifications"
import NavBuyCartFav from "./components/NavBuyCartFav"


export default function PageProduct(){
    const [productInfos, setProductInfos] = useState({})
    const [productWasFound, setProductWasFound] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const [optionsSelected, setOptionsSelected] = useState({})
    const [optionsRequired, setOptionsRequired] = useState([])
    const { id } = useParams()

    
    useEffect(()=>{
        requestProduct.getProductInfos(id).then(product=>{
            if(!product){
                setProductWasFound(false)
                setTimeout(()=> setNotFound(true), 1000)
            }
            else{
                setProductWasFound(true)
                setProductInfos(product)
                setOptionsSelected(selectedOptionsAvailable(product.options))
                storeViewsInLocSt(id)
            }
        })
    }, [])

    function storeViewsInLocSt(idProduct){
        const productsViewsInStorage = JSON.parse(localStorage.getItem("productsViews")) || []
        if(!productsViewsInStorage.includes(idProduct)){
            requestViewProduct(idProduct).then(response=>{
                const {error, message} = response
                if(!error){
                    productsViewsInStorage.push(idProduct)
                    localStorage.setItem("productsViews", JSON.stringify(productsViewsInStorage))
                }else{
                    alert(message)
                }
                
            })
        }
    }

    function changeOptions(optionsMarked){
        setOptionsSelected(option=>{
            option[optionsMarked.options] = optionsMarked.select
            return option
        })
    }
    function selectedOptionsAvailable(options){
        const newOptions = {}
        for(let option in options){
            if(options[option].length > 0){
                newOptions[option] = ""
            }
        }
        return newOptions
    }

    const templates = {
        previousValue:`R$ ${Number(productInfos.previousValue).toFixed(2).replace(".", ",")}`,
        value: `R$ ${Number(productInfos.value).toFixed(2).replace(".", ",")}`,
        installments: productInfos.installments !== 1 ? `ou em até ${productInfos.installments}x de R$${(productInfos.value / productInfos.installments).toFixed(2).replace(".", ",")} sem juros` : "",
    }

 


    


    if(productWasFound){
        return (
            <div>
                <Header/>
                <Container>
                    <div className="content">
                        <div className="main-product-content">
                            <VisualShowCase images={[productInfos.cover, productInfos.images]}/>
                            <div className="infos-product">
                                <h1>{productInfos.title}</h1>
                                <h4>Marca: {productInfos.specifications?.brand}</h4>
                                <div className="avaliation-rasting">
                                    <Rating size="small" readOnly valueDefault={0}/>
                                    <span className="quantity-avaliation">{productInfos.avaliation?.length} avaliações de clientes</span>
                                </div>
                                <hr/>
                                <div className="price-field">
                                    <del>{templates.previousValue}</del>
                                    <span>{templates.value}</span>
                                </div>
                                <p>{templates.installments}</p>
                                <NavBuyCartFav productInfos={productInfos} options={optionsSelected} onError={setOptionsRequired}/>

                                <div style={{marginTop: "4rem"}}>
                                    <RadioListOptions required={optionsRequired} onChange={changeOptions} show={productInfos.options?.colors.length > 0} label={[<i key="icon" className='bx bxs-color'></i>,<span key="label">Opções de cores:</span>]} name="colors" options={productInfos.options.colors}/>
                                    <RadioListOptions required={optionsRequired} onChange={changeOptions} show={productInfos.options?.clothingSizes.length > 0 } label={[<span key="label">Opções de tamanho:</span>]} name="clothingSizes" options={productInfos.options.clothingSizes}/>
                                    <RadioListOptions required={optionsRequired} onChange={changeOptions} show={productInfos.options?.shoeSizes.length > 0 } label={[<span key="label">Opções de tamanho:</span>]} name="shoeSizes" options={productInfos.options.shoeSizes}/>
                                </div>
                                
                                <FieldFreight/>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="technical-info">
                            <h2>Descrição</h2>
                            <p>{`${productInfos.description}`}</p>
                            <Specifications specifications={productInfos.specifications}/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else{
        return (
            <LoadedPopUpStyled>
                { !notFound ? (<Loaded speed={200}/>) : <h1>Produto não encontrado!</h1>  }
            </LoadedPopUpStyled>
        )
    }
    
}