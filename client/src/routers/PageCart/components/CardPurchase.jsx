
import React, {useEffect} from "react"
import { Link } from "react-router-dom"

export default function CardPuschase({infosPurchaseValues}){


    return (
        <div className="card-purchase">
                <ul>
                  <li>
                    <span>Subtotal(1 item)</span>
                    <span>
                      <b>R$ {infosPurchaseValues.subTotal.toFixed(2).replace(".", ",")}</b>
                    </span>
                  </li>
                  <li>
                    <span>
                      Frete Pago
                      <br />
                      <button>Ver outras opções de entrega</button>
                    </span>
                    <span>
                      <b>{infosPurchaseValues.freigth.toFixed(2).replace(".", ",")}</b>
                      <p>Chega dia 14 de Março</p>
                    </span>
                  </li>
                  <li>
                    <span>Cupom de desconto</span>
                    <button>Adicionar</button>
                  </li>
                  <li>
                    <span>Valor total</span>
                    <span>
                      <b>R$ {infosPurchaseValues.valueTotal.toFixed(2).replace(".", ",")}</b>
                      <p>Em até <b>4x</b> de <b>R$ {(infosPurchaseValues.valueTotal/4).toFixed(2).replace(".", ",")}</b> sem juros</p>
                    </span>
                  </li>
                  <li>
                    <nav>
                        <Link to="/checkout">Comprar</Link>
                        <Link to="/">Ver mais produtos</Link>
                    </nav>
                        
                    </li>
                </ul>
              </div>
    )
}