import {SectionNavigationStyled} from "../styles"
import {ListPreferencesStyled} from "./styles"

export default function SectionPreferencesCenter(){
    return (
        <SectionNavigationStyled>
            <h1>Central de preferencias</h1>
            <div className="card-content">
                <ListPreferencesStyled>
                    <h3>Escolha suas preferências</h3>
                    <p>Esse é o seu espaço. Você decide o que é importante pra você, de acordo com o seu interesse.<br></br>Vamos lá?</p>
                    <ul>
                        <li>
                            <i className='bx bxs-basketball'></i>
                            <article>
                                <span>Selecione seu</span>
                                <h4>ESPORTES FAVORITOS</h4>
                            </article>
                        </li>
                        <li>
                            <i className='bx bxs-t-shirt' ></i>
                            <article>
                                <span>Escolha seu tamanho de </span>
                                <h4>ROUPAS</h4>
                            </article>
                        </li>
                        <li>
                            <i className='bx bxs-ruler'></i>
                            <article>
                                <span>Escolha seu tamanho de </span>
                                <h4>CALÇADO</h4>
                            </article>
                        </li>
                    </ul>
                </ListPreferencesStyled>
            </div>
        </SectionNavigationStyled>
    )
}