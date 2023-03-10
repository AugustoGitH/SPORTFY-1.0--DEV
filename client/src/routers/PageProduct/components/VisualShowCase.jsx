import { useEffect, useState, useRef } from 'react';
import ImageZoom from "../../../components/ImageZoom";

import {VisualShowCaseStyle} from "../styles"


export default function VisualShowCase({images}){
    const [mainImage, setMainImage] = useState("")
    const [secundaryImages, setSecundaryImages] = useState([])
    useEffect(()=>{
        if(images){
            setMainImage(images[0])
            setSecundaryImages(images.flat().slice(1, images.flat().length))
        }
    }, [images])

    function handleClickSecundary(image){
        setSecundaryImages(secImgs=> ([mainImage, ...secImgs.filter(imgP=> imgP !== image ) ]) )
        setMainImage(image)
    }
    return (
            <VisualShowCaseStyle>
                <div className="showcase">
                    <ImageZoom className="image" src={mainImage} alt="artigos esportivos"/>
                </div>
                {secundaryImages?
                    (
                        <ul>
                            {secundaryImages.map((img, i)=> <li onClick={()=> handleClickSecundary(img)} key={i}><img src={img} /></li>)}
                        </ul>
                    )

                :<></>}
            </VisualShowCaseStyle>
    )
}
