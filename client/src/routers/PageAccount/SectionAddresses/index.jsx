import { useEffect, useState } from "react"
import {SectionNavigationStyled} from "../styles"
import {SectionAddressesStyled} from "./styles"

import ReqAddressesUserData from "../../../requestsAPI/user/actions"

export default function SectionAddresses(){
    const [addressesData, setAddressesData] = useState([])
    useEffect(()=>{
        ReqAddressesUserData.addressesData().then(data=>{
            setAddressesData(data.addressesData.addresses)
        })
    }, [])

    const CardsAddresses = ({...rest})=>{
        const Cards = ({main, address})=>{

            return (
                <div className="card">
                    <h4>{main ? "Principal" : "Secundario"}</h4>
                    <span>{address.nameOfStreet}, {address.number}</span>
                    <span>{address.neighborhood} - {address.city} - {address.state.split(" ").map(word=> word[0]).join("")}</span>
                    <span>CEP: {address.cep}</span>
                    <div className="popUp-button">
                        <button><i className='bx bx-edit'></i></button>
                    </div>
                </div>
            )
        }
        return (
            <div className="cards-addresses">
                { addressesData.map((addr, i)=> <Cards main={true} address={addr} key={i}/> ) }
            </div>
        )
    }

    return (
        <SectionNavigationStyled>
            <h1>Endereços</h1>
            <div className="card-content">
                <SectionAddressesStyled>
                    <CardsAddresses/>
                    <div className="button-container"><button>Adicionar mais endereços</button></div>
                </SectionAddressesStyled>
            </div>
        </SectionNavigationStyled>
    )
}
