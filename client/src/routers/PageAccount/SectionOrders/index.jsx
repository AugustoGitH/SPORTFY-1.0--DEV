import {SectionNavigationStyled, AwayMessageStyled} from "../styles"

import { Link } from "react-router-dom"


function NoOrders(){
    return (
        <AwayMessageStyled>
            <span>Você não tem pedidos realizados</span>
            <Link className="button-link" to="/">Ir para a página inicial</Link>
        </AwayMessageStyled>
    )
}

export default function SectionOrders(){
    return (
        <SectionNavigationStyled>
             <h1>Pedidos</h1>
             <div className="card-content">
                <NoOrders/>
             </div>
        </SectionNavigationStyled>
    )
}