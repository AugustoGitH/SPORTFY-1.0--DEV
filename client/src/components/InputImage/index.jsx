import React, {useState, useEffect} from 'react';
import { InputImageStyled } from "./styles"


export default function InputImage({width, error = false, amountImages = 1 , changeInputFile = ()=>{}, style}) {
  const [images, setImages] = useState([]);

  const handleImageChange = e => {
    if(amountImages > 1 && images.length === amountImages) return
    const file = e.target.files[0]
    if(typeof file !== "object" || file === null) return

    const render = new FileReader()
    render.readAsDataURL(file)
    render.onload = (event)=>{
      const imagesSrc = event.target.result
      const newImages = imagesSrc ? ( amountImages > 1 && images.length <= (amountImages - 1) ? [imagesSrc, ...images] : amountImages === 1 ? [imagesSrc] : [...images] ) : [...images]
      setImages(newImages)
    }

  };

  useEffect(()=>{
    if(images.length > 0){
      changeInputFile(amountImages === 1 ? images[0] : images)
    }
  }, [images])

  const IdG = Math.round(Math.random() * 300) + "image-uploader"

  const ImageConteiner = ({img, showClose})=>{
    return (
      <div className="image-container">
         {showClose ? (<button onClick={()=> setImages(imgP=> imgP.filter(imageP=> imageP !== img ))}><i className='bx bx-x'></i></button> ) : <></>}
         <img src={img} alt="Imagem selecionada" />
      </div>
    )
  }

  const defineLabel = (amountImages, error)=>{
    if(error) return "Imagem é necessaria!"
    if(amountImages > 1) return `Adicionar no máximo ${amountImages} imagens`
    if(images.length < 1) return "Adiconar imagem"
    return "Trocar de imagem"
  }



  return (
    <InputImageStyled style={{width: width, ...style}}>
        <label className={error ? "style-error" : ""} htmlFor={IdG}>{defineLabel(amountImages, error)}<i className='bx bxs-image-add'></i></label>
        <input
          id={IdG}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {images.length > 0 ? (
          <div className="pre-view">
            {images.map((img, i)=> <ImageConteiner showClose={amountImages > 1} img={img} key={i}/> )}
          </div>
        ):<></>}
    </InputImageStyled>
  );
}
