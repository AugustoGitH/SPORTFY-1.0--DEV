import {SpecificationsStyled} from "../styles"

export default function Specifications({specifications}){
    if ( !specifications ) return 
    const {name = "", brand = "", gender = "", 
        obs = "", indicatesTo = "", sewing = "", guarantee = "", origin = ""} = specifications
    return (
        <SpecificationsStyled>
            { obs.length > 80 && obs && (<p><b>OBS:</b> {obs}</p>)}
            <ul>
                <li><b>Nome:</b> {name}</li>
                <li><b>Marca:</b> {brand}</li>
                <li><b>Genêro:</b> {gender}</li>
                { indicatesTo && (<li><b>Indicado para:</b> {indicatesTo}</li>) }
                { sewing && (<li><b>Costura:</b> {sewing}</li>) }
                { guarantee && (<li><b>Garantia do fabricante:</b> {guarantee}</li>)}
                { origin && (<li><b>Origem:</b> {origin}</li>) }
                { obs.length < 80 && obs && (<p><b>OBS:</b> {obs}</p>)}
            </ul>
        </SpecificationsStyled>
    )
}