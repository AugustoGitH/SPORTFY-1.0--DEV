import {popUpAccountStyled} from "./styles"

export default function PopUpAccount({show}){
    if(show){
        return (
            <popUpAccountStyled>
                <h1>PopUp</h1>
            </popUpAccountStyled>
        )
    }
}