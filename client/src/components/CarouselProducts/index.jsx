
import { useRef, useEffect, useState } from "react"
import CardProduct from "../../components/ProductPreview"
import CardProductSkeleton from "../../components/ProductPreviewSkeleton"
import {CorouselProductsStyled} from "./styles"


function generateSketonCards(numberCards){
    const cards = []
    for(let i = 1; i <= numberCards; i++) cards.push(<CardProductSkeleton key={i}/>)
    return cards
}


export default function CarouselProducts({title, iconTitle, requestProducts}){
    const carousel = useRef(null)
    const [productsCards, setProductsCards] = useState([])
    const [cardsSkeleton, setCardsSkeleton] = useState( generateSketonCards(4) )

    useEffect(() => {
        requestProducts().then(products=>{
            if(!products) return alert("Ocorreu um erro ao buscar produtos!")
            else{
                setCardsSkeleton([])
                setProductsCards(products)
            }
        })
    }, [])

    function handleLeftClick(e){
        e.preventDefault()
        const largCarousel = carousel.current.offsetWidth
        carousel.current.scrollLeft -= largCarousel
    }
    function handleRightClick(e){
        e.preventDefault()
        const largCarousel = carousel.current.offsetWidth
        carousel.current.scrollLeft += largCarousel
    }

    return (
        <CorouselProductsStyled>
            <h1>{iconTitle}{title}</h1>
            <div className="content" ref={carousel}>
                { productsCards.map((card, index)=> <CardProduct key={index} card={card}/>) }
                { cardsSkeleton }
            </div>
            <button className="button-control button-left-direction" onClick={handleLeftClick}><i className='bx bx-left-arrow'></i></button>
            <button className="button-control button-right-direction" onClick={handleRightClick}><i className='bx bx-right-arrow' ></i></button>
        </CorouselProductsStyled>
    )
}