import { useEffect, useState } from "react";
import CheckboxLabels from "../../../components/Checkbox";
import Input from "../../../components/Input"
import {SectionNavigationStyled} from "../styles"
import {PersonalInfosStyled} from "./styles"

import ReqPersonalUserData from "../../../requestsAPI/user/actions"
import formatValue from "../../../formRelatedMethods/formatValuesInputs"

export default function SectionPersonalInfo(){
    const [personalData, setPersonalData] = useState({
        fullName: "",
        dateOfBirth: "",
        cpf: "",
        telephone: "",
        email: "",
        notifications: {
          orderSMS: false,
          orderWhatsapp: false,
          offersWhatsapp: false,
        },
      });
    const configsStyleInputs = {
        className: "input-form",
        color: "primary",
        variant: "filled",
        size: "small",
        style: {
            width: "100%",
            marginTop: "2rem"
        }
    };
    const updatePersonalData = (data) => {
        setPersonalData({
          fullName: data.fullName,
          dateOfBirth: data.dateOfBirth,
          cpf: data.cpf,
          telephone: data.telephone,
          email: data.email,
          notifications: {
            orderSMS: data.notifications.orderSMS,
            orderWhatsapp: data.notifications.orderWhatsapp,
            offersWhatsapp: data.notifications.offersWhatsapp,
          },
        });
      };
    useEffect(()=>{
        ReqPersonalUserData.personalData().then(data=>{
            const user = data.personalData
            updatePersonalData(user)
        })
    }, [])

    return (
        <SectionNavigationStyled>
            <h1>Seus dados</h1>
            <div className="card-content">
            <PersonalInfosStyled>
                    <div className="personal-data">
                        <h2>Dados pessoais</h2>
                        <Input {...configsStyleInputs} label="Nome Completo" value={personalData.fullName} />
                        <Input {...configsStyleInputs} label="Data de nascimento" value={personalData.dateOfBirth}/>
                        <Input {...configsStyleInputs} label="CPF" value={personalData.cpf}/>
                        <Input {...configsStyleInputs} label="Telefone" value={formatValue.telefone(personalData.telephone)} />
                    </div>
                    <div className="line-vertical"></div>
                    <div className="acess-data">
                        <h2>Dados de acesso</h2>
                        <Input {...configsStyleInputs} label="Nome Completo" value={personalData.email}/>
                        <div className="buttons-edit">
                            <button>ALTERAR E-MAIL</button>
                            <button>ALTERAR SENHA</button>
                        </div>
                        <div className="preferences">
                            <h2>Central de preferências</h2>
                            <CheckboxLabels checked={personalData.notifications.orderSMS} label={<p>Quero receber notificações sobre os meus <b>pedidos</b> por <b>SMS</b></p>} style={{marginTop: "1rem"}}/>
                            <CheckboxLabels checked={personalData.notifications.orderWhatsapp} label={<p>Quero receber <b>notificações sobre os meus pedidos</b> por <b>WhatsApp</b></p>} style={{marginTop: "1rem"}}/>
                            <CheckboxLabels checked={personalData.notifications.offersWhatsapp} label={<p>Quero receber <b>ofertas e novidades</b> por <b>WhatsApp</b></p>} style={{marginTop: "1rem"}}/>
                        </div>
                    </div>
                </PersonalInfosStyled>
            </div>
        </SectionNavigationStyled>
    )
}