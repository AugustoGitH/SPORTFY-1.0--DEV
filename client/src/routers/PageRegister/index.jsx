import { Container } from "./styles";

import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";
import Form from "../../components/Form";
import PopUpLoad from "../../components/PopUpLoad"

import { registerSchema } from "../../formRelatedMethods/schemas/form";
import { register as registerRequest } from "../../requestsAPI/actions";
import formatValuesInput from "../../formRelatedMethods/formatValuesInputs"

export default function PageRegister() {
  const [loadingResponse, setLoadingResponse] = useState(false)
  const [registrationCompleted, setRegistrationCompleted] = useState(false)
  const navigation = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });


  const submitFormRegister = (data) => {
    setLoadingResponse(true)
    for(let key in data) data[key] = data[key] === undefined ? false : data[key]

    registerRequest(data).then(response=>{
      const {error, message} = response
      if(!error) setTimeout(()=> setRegistrationCompleted(true), 2000)
      else{
        setLoadingResponse(false)
        alert(message)
      }
    })
  };


  const configsStyleInputs = {
    className: "input-form",
    color: "primary",
    variant: "filled",
    size: "small",
  };


  return (
    <div>
      <Header searchBar={false} navAccess={false} fixed={false} />
      <Container>
        <div className="content">
          <Form onSubmit={handleSubmit(submitFormRegister)}>
            <div className="form-content">
              <FragFormPersonal
                className="form-container-person"
                errors={errors}
                control={control}
                configsStyleInputs={configsStyleInputs}
              />
              <FragFormAccount
                className="form-container-account"
                errors={errors}
                control={control}
                configsStyleInputs={configsStyleInputs}
              />
            </div>
          </Form>
        </div>
      </Container>
      <PopUpLoad show={loadingResponse} over={registrationCompleted} whenFinished={{
        messageToTop: "Seu registro foi realizado com sucesso!",
        functionClickButton: ()=> navigation("/auth/login"),
        writtenButton: "Faça seu login com os dados registrados!"
      }}/>
       
    </div>
  );
}




function FragFormCheckBoxes({ control }) {
  const [toAgree, setToAgree] = useState(false);
  return (
    <div>
      <Controller
        control={control}
        name="orderSMS"
        render={({ field: { onChange } }) => (
          <Checkbox
            className="checkbox-form"
            onChange={onChange}
            label={
              <p>
                Quero receber{" "}
                <strong>notificações sobre os meus pedidos</strong> por{" "}
                <strong>SMS</strong>
              </p>
            }
          />
        )}
      />
      <Controller
        control={control}
        name="orderWhatsapp"
        render={({ field: { onChange } }) => (
          <Checkbox
            className="checkbox-form"
            onChange={onChange}
            label={
              <p>
                Quero receber{" "}
                <strong>notificações sobre os meus pedidos</strong> por{" "}
                <i className="bx bxl-whatsapp"></i>Whatsapp
              </p>
            }
          />
        )}
      />
      <Controller
        control={control}
        name="offersWhatsapp"
        render={({ field: { onChange } }) => (
          <Checkbox
            className="checkbox-form"
            onChange={onChange}
            label={
              <p>
                Quero receber <strong>ofertas e novidades</strong> por{" "}
                <i className="bx bxl-whatsapp"></i>Whatsapp
              </p>
            }
          />
        )}
      />
      <hr style={{ marginTop: "2rem" }}></hr>
      <Controller
        control={control}
        name="PrivacyPolicy"
        render={({ field: { onChange } }) => (
          <Checkbox
            className="checkbox-form"
            onChange={(ev) => {
              setToAgree(ev.target.checked), onChange(ev);
            }}
            label={
              <p>
                Concordo com o uso dos meus dados para compra e experiência no
                site conforme a <a href="#">Política de Privacidade</a>
              </p>
            }
          />
        )}
      />
      <button type="submit" className="button-cont-forms" disabled={!toAgree}>
        CONTINUAR
      </button>
    </div>
  );
}



function FragFormEstate({ control, errors }) {
  const [states, setStates] = useState([]);
  const [stateSelected, setStateSelected] = useState("");
  const [citys, setCitys] = useState([]);
  const [stateCitys, setStateCitys] = useState(true);

  const optionsAPI = {
    states: async () => {
      const resAPI = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      ).then((res) => res.json().then((json) => json));
      const statesAPI = resAPI.map((est) => est.nome);
      return statesAPI;
    },
    citys: async (estadoParams) => {
      const resAPI = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
      ).then((res) => res.json().then((json) => json));
      const citysAPI = resAPI.filter((cid) => {
        const statesFilter = cid.municipio.microrregiao.mesorregiao.UF.nome
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        const stateParam = estadoParams
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        return statesFilter === stateParam;
      });
      return citysAPI
        .map((cid) => cid.municipio.nome)
        .filter((cid, index, array) => array.indexOf(cid) === index);
    },
  };
  useEffect(() => {
    if (stateSelected) {
      optionsAPI
        .citys(stateSelected)
        .then((citysUF) => setCitys(citysUF));
      setStateCitys(false);
    }
  }, [stateSelected]);

  useEffect(() => {
    optionsAPI.states().then((statesUF) => setStates(statesUF));
  }, []);
  return (
    <div>
      <Controller
        control={control}
        name="state"
        render={({ field: { onChange } }) => (
          <Select
            className="input-form"
            style={{ width: "180px" }}
            label="Estado"
            size="small"
            options={states}
            onClickOption={(stateP) => {
              setStateSelected(stateP), onChange(stateP);
            }}
            error={!!errors.state}
            helperText={errors.state?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange } }) => (
          <Select
            className="input-form"
            style={{ width: "100px" }}
            label="Cidade"
            size="small"
            options={citys}
            disabled={stateCitys}
            onClickOption={onChange}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        )}
      />
    </div>
  );
}

function FragFormAccount({ errors, control, configsStyleInputs, ...rest }) {
  return (
    <div {...rest}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Seu e-mail"
            preValue={localStorage.getItem("email") ?? ""}
            style={{ width: "100%" }}
            onChangeText={onChange}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <p className="alert-email">
        A confirmação e o acompanhamento de seu pedido serão enviados ao seu
        e-mail
      </p>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Senha"
            type="password"
            style={{ width: "100%" }}
            onChange={onChange}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />

      <FragFormCheckBoxes control={control} />
    </div>
  );
}

function FragFormPersonal({ errors, control, configsStyleInputs, ...rest }) {
  const optionsSelecteds = {
    meses: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    tiposEndress: [
      "Avenida",
      "Rua",
      "Praça",
      "Quadra",
      "Estrada",
      "Alameda",
      "Ladeira",
      "Travessa",
      "Rodovia",
      "Outros",
    ],
  };
  return (
    <div {...rest}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Nome"
            onChange={onChange}
            style={{ width: "47%" }}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="surname"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Sobrenome"
            style={{ width: "47%" }}
            onChange={onChange}
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="day"
        render={({ field: { onChange } }) => (
          <Select
            numberInterval={[1, 31]}
            label="Dia"
            {...configsStyleInputs}
            style={{ width: "70px" }}
            onClickOption={onChange}
            error={!!errors.day}
            helperText={errors.day?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="month"
        render={({ field: { onChange } }) => (
          <Select
            numberInterval={[1, 12]}
            options={optionsSelecteds.meses}
            label="Mês"
            {...configsStyleInputs}
            style={{ width: "90px" }}
            onClickOption={onChange}
            error={!!errors.month}
            helperText={errors.month?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="year"
        render={({ field: { onChange } }) => (
          <Select
            numberInterval={[1930, 2023]}
            label="Ano"
            {...configsStyleInputs}
            style={{ width: "90px" }}
            onClickOption={onChange}
            error={!!errors.year}
            helperText={errors.year?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="CPF"
            onChange={onChange}
            changeInputFormat={formatValuesInput.cpf}
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="telephone"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Seu telefone"
            onChange={onChange}
            changeInputFormat={formatValuesInput.telefone}
            error={!!errors.telephone}
            helperText={errors.telephone?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cep"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Seu CEP"
            onChange={onChange}
            changeInputFormat={formatValuesInput.cep}
            error={!!errors.cep}
            helperText={errors.cep?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="typeOfAddress"
        render={({ field: { onChange } }) => (
          <Select
            {...configsStyleInputs}
            style={{ width: "180px" }}
            label="Tipo de endereço"
            options={optionsSelecteds.tiposEndress}
            onClickOption={onChange}
            error={!!errors.typeOfAddress}
            helperText={errors.typeOfAddress?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="nameOfStreet"
        render={({ field: { onChange } }) => (
          <Input
            label="Nome da Rua"
            {...configsStyleInputs}
            onChange={onChange}
            style={{ width: "330px" }}
            error={!!errors.nameOfStreet}
            helperText={errors.nameOfStreet?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="number"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            type="number"
            label="Número"
            onChange={onChange}
            error={!!errors.number}
            helperText={errors.number?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="complement"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Complemento"
            onChange={onChange}
            error={!!errors.complement}
            helperText={errors.complement?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="neighborhood"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Bairro"
            onChange={onChange}
            style={{ width: "250px" }}
            error={!!errors.neighborhood}
            helperText={errors.neighborhood?.message}
          />
        )}
      />

      <FragFormEstate control={control} errors={errors} />
      <Controller
        control={control}
        name="referencePoint"
        render={({ field: { onChange } }) => (
          <Input
            {...configsStyleInputs}
            label="Ponto de referência"
            style={{ width: "100%" }}
            onChange={onChange}
            error={!!errors.referencePoint}
            helperText={errors.referencePoint?.message}
          />
        )}
      />
    </div>
  );
}
