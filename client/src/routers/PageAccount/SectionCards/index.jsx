import {SectionNavigationStyled, AwayMessageStyled} from "../styles"

import { Link } from "react-router-dom"


function NoCarts(){
    return (
        <AwayMessageStyled>
            <span>Você não tem nenhum cartão salvo.</span>
            <p>Por segurança, você só pode salvar seus cartões de crédito ao fazer um novo pedido</p>
            <Link className="button-link" to="/">Ir para a página inicial</Link>
        </AwayMessageStyled>
    )
}


export default function SectionCards(){
    return (
        <SectionNavigationStyled>
            <h1>Cartões salvos</h1>
            <div className="card-content">
                <NoCarts/>
            </div>
        </SectionNavigationStyled>
    )
}