import { Link } from "react-router-dom"
import {SectionNavigationStyled, AwayMessageStyled} from "../styles"
 
function NoExchanges(){
    return (
        <AwayMessageStyled>
            <span>Você não fez nenhuma troca</span>
            <p>Para trocar seu produto, é só fazer a solicitação na seção “Pedidos”</p>
            <Link className="button-link" to="/">Ir para a página inicial</Link>
        </AwayMessageStyled>
    )
}

 export default function SectionExchanges(){
    return (
        <SectionNavigationStyled>
            <h1>Trocas</h1>
            <div className="card-content">
                <NoExchanges/>
            </div>
        </SectionNavigationStyled>
    )
 }