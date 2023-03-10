
import { ContainerStyled } from "./styles"


export default function Container({children, styleContent, widthContent = 1100}){
    return (
        <ContainerStyled widthContent={widthContent}>
            <div className="content" style={styleContent}>
                { children }
            </div>
        </ContainerStyled>
    )
}