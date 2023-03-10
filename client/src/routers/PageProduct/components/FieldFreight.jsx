import { useEffect, useState, useRef } from 'react';
import {FieldFreightStyled} from "../styles"
import formatValue from "../../../formRelatedMethods/formatValuesInputs"
import Input from "../../../components/Input"

export default function FieldFreight(){
    const [CEP, setCEP] = useState(JSON.parse(localStorage.getItem("cep")) || null)
    const [edition, setEdition] = useState(false)
    const [inputCEP, setInputCEP] = useState(CEP || "")

    function consultCEP(){
        if(inputCEP.replace("-", "").length !== 8 ) return
        setEdition(false)
        setCEP(inputCEP)
    }
   
    return (CEP &&
        <FieldFreightStyled>
            {
                !edition ? (
                    <div>
                        <p style={{fontSize: ".9rem"}}><span>Chega até dia 21 de março</span> ao escolher a opção de entrega Expressa para o <b>CEP {formatValue.cep(CEP)}</b> </p>
                        <ul>
                            <button onClick={()=> setEdition(true)}>Alterar CEP</button>
                            <button>ver formas de entrega</button>
                        </ul>
                    </div>
                ) : (
                    <div className="edition-cep">
                        <Input onChange={ev=> setInputCEP(ev.target.value)} color="primary" variant="filled" label="CEP" preValue={formatValue.cep(CEP)} size="small" />
                        <button onClick={consultCEP}>Consultar</button>
                    </div>
                ) 

            }
        </FieldFreightStyled>
    )
}