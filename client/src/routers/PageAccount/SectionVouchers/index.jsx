import {SectionNavigationStyled, AwayMessageStyled} from "../styles"
import { Link } from "react-router-dom"

export default function SectionVouchers(){
    function NoVouchers(){
        return (
            <AwayMessageStyled>
                <span>Você não tem nenhum vale</span>
                <p>Quando tiver, ele ficará disponível aqui. Tem alguma dúvida sobre vales? Acesse a nossa Central de Relacionamentos, <Link>clicando aqui</Link></p>
                <Link className="button-link" to="/">Ir para a página inicial</Link>
            </AwayMessageStyled>
        )
    }
    return (
        <SectionNavigationStyled>
            <h1>Vales</h1>
            <div className="card-content">
                <NoVouchers/>
            </div>
        </SectionNavigationStyled>
    )
}