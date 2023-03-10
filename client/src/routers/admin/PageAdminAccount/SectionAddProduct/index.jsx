import {SectionNavigationStyled, AwayMessageStyled} from "../styles"
import {ToAddProductContainerStyled, Button} from "./styles"

import CardProduct from "../../../../components/ProductPreview"
import InputImage from "../../../../components/InputImage"
import Input from "../../../../components/Input"
import RadioGroup from "../../../../components/RadioGroup"
import Select from "../../../../components/Select"
import CheckboxMoreLayers from "../../../../components/CheckboxMoreLayers"
import Form from "../../../../components/Form"
import AutoComplete from "../../../../components/AutoComplete"


import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";


import {productSchema} from "../../../../formRelatedMethods/schemas/form"
import adminRequests from "../../../../requestsAPI/admin/actions"


import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const configsStyleInputs = {
    color: "primary",
    variant: "filled",
    size: "small",
};


function EditionCardExemple({control, errors}){
    const [card, setCard] = useState({
        cover: "",
        title: "",
        articleType: "volleyball",
        value: 0,
        previousValue: 0,
        freight: "free",
        installments: 1
    })

    const updateCard = (value, prop)=> {
        setCard(cardI=> ({...cardI, [prop]: value}))
    }

    return (
        <div className="edition-card-exemple">
            <CardProduct clickable={false} card={card} style={{cursor: "default"}}/>
            <div className="product-edit-field">
                <Controller
                    control={control}
                    name="cover"
                    render={({ field: { onChange } })=>(
                        <InputImage error={!!errors.cover} changeInputFile={url=> { onChange(url), updateCard(url, "cover") }} width="100%"/>
                    )}
                />
                <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: "100%", marginTop: "1rem"}} error={!!errors.title} helperText={errors.title?.message} onChange={ev=> { onChange(ev), updateCard(ev.target.value, "title")}} {...configsStyleInputs} label="Título do produto"/>
                    )}
                />
                <Controller
                    control={control}
                    name="articleType"
                    render={({ field: { onChange } })=>(
                        <RadioGroup style={{width: "100%", marginTop: "1rem"}} onChangeText={value=> { onChange(value), updateCard(value, "articleType")}} label="Artigo esportivo de" radios={[
                            { label: "Volêi", value: "volleyball"},
                            { label: "Futebol", value: "football"},
                            { label: "Basquete", value: "basketball"},
                            { label: "Natação", value: "swimming"},
                        ]}/>
                    )}
                />
                <Controller
                    control={control}
                    name="freight"
                    render={({ field: { onChange } })=>(
                        <RadioGroup style={{width: "100%", marginTop: "1rem"}} onChangeText={value=> { onChange(value), updateCard(value, "freight")}} label="Frete" radios={[
                            { label: "Grátis", value: "free" },
                            { label: "Pago", value: "paidOut"}
                        ]}/>
                    )}
                />
                <Controller
                    control={control}
                    name="previousValue"
                    render={({ field: { onChange } })=>(
                        <Input {...configsStyleInputs} style={{width: "100%", marginTop: "1rem"}} error={!!errors.previousValue} helperText={errors.previousValue?.message} onChange={ev=> { onChange(ev), updateCard(Number(ev.target.value), "previousValue")}} adornment="R$" label="Valor anterior" type="number"/>
                    )}
                />
                <Controller
                    control={control}
                    name="value"
                    render={({ field: { onChange } })=>(
                        <Input {...configsStyleInputs} style={{width: "100%", marginTop: "1rem"}} error={!!errors.value} helperText={errors.value?.message} onChange={ev=>{ onChange(ev), updateCard(Number(ev.target.value), "value")}} adornment="R$" label="Valor atual" type="number"/>
                    )}
                />
                <Controller
                    control={control}
                    name="installments"
                    render={({ field: { onChange } })=>(
                        <Select {...configsStyleInputs } style={{width: "100%", marginTop: "1rem"}} error={!!errors.installments} helperText={errors.installments?.message} onClickOption={op=> { onChange(op), updateCard(op, "installments")}} label="Parcelas no cartão sem juros" numberInterval={[1, 4]}  />
                    )}
                />
            </div> 
        </div>
    )
}

function OptionsProduct({control, ...rest}){
    return (
        <div {...rest}>
            <Controller
                control={control}
                name="shoeSizes"
                render={({ field: { onChange } })=>(
                    <CheckboxMoreLayers onChange={onChange} row={true} label={<p>Tamanhos de calçado <i className='bx bxs-ruler' ></i></p>} options={[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]}/>
                )}
            />
            <Controller
                control={control}
                name="clothingSizes"
                render={({ field: { onChange } })=>(
                    <CheckboxMoreLayers onChange={onChange} label={<p>Tamanhos de roupa <i className='bx bxs-t-shirt'></i></p>} options={["Tamanho extra pequeno (XXS)", "Tamanho pequeno (XS)", "Tamanho médio (M)", "Tamanho grande (L)", "Tamanho extra grande (XL)", "Tamanho duplo extra grande (XXL)"]}/>
                )}
            />
            <Controller
                control={control}
                name="colors"
                render={({ field: { onChange } })=>(
                    <CheckboxMoreLayers onChange={onChange} row={true}  label={<p>Cores <i className='bx bx-color' ></i></p>} options={["Preto", "Branco", "Laranja", "Cinza", "Azul", "Vermelho", "Verde", "Amarelo", "Rosa", "Roxo", "Marrom"]}/>
                )}
            />
        </div>
    )
}

function CompleteMoreInformation({control, errors}){
    const tagsSportiveArticles = [
        { tags: "esportes" },
        { tags: "fitness" },
        { tags: "musculação" },
        { tags: "treino" },
        { tags: "corrida" },
        { tags: "ciclismo" },
        { tags: "futebol" },
        { tags: "basquete" },
        { tags: "vôlei" },
        { tags: "natação" },
        { tags: "tênis" },
        { tags: "artes marciais" },
        { tags: "suplementos" },
        { tags: "vestuário esportivo" },
        { tags: "calçados esportivos" },
        { tags: "equipamentos esportivos" },
        { tags: "atividades ao ar livre" },
        { tags: "aventura" },
        { tags: "competição" },
        { tags: "condicionamento físico" },
        { tags: "esportes radicais" },
        { tags: "exercícios" },
        { tags: "ginástica" },
        { tags: "higiene e cuidados pessoais" },
        { tags: "nutrição esportiva" },
        { tags: "preparação física" },
        { tags: "reabilitação" },
        { tags: "saúde e bem-estar" },
        { tags: "treinamento esportivo" }
      ];
    return (
        <div className="group-inputs-product">
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange } })=>(
                    <Input {...configsStyleInputs} style={{width: "100%", marginTop: "1rem"}} error={!!errors.description} helperText={errors.description?.message} onChange={onChange} label="Descrição do produto" multiline rows={7} />
                )}
            />
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange } })=>(
                    <Input style={{width: "100%", marginTop: "1rem"}} onChange={onChange} error={!!errors.brand} helperText={errors.brand?.message} {...configsStyleInputs} label="Nome do produto" />
                )}
            />
            <Controller
                control={control}
                name="brand"
                render={({ field: { onChange } })=>(
                    <Input style={{width: "100%", marginTop: "1rem"}} onChange={onChange} error={!!errors.brand} helperText={errors.brand?.message} {...configsStyleInputs} label="Marca do produto" />
                )}
            />
            <Controller
                control={control}
                name="gender"
                render={({ field: { onChange } })=>(
                    <Select style={{width: "100%", marginTop: "1rem"}}  onClickOption={onChange} error={!!errors.gender} helperText={errors.gender?.message} {...configsStyleInputs} label="Genêro" options={["Unissex", "Masculino", "Femino", "Nunhum"]}/>
                )}
            />
            <Controller
                control={control}
                name="stock"
                render={({ field: { onChange } })=>(
                    <Input style={{width: "100%", marginTop: "1rem"}} onChange={onChange} error={!!errors.stock} type="number" helperText={errors.stock?.message} {...configsStyleInputs} label="Qual é a quantidade do produto em estoque? " />
                )}
            />
            <Controller
                    control={control}
                    name="indicatesTo"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: "100%", marginTop: "1rem"}} onChange={onChange} error={!!errors.indicatesTo} helperText={errors.indicatesTo?.message} {...configsStyleInputs}  label="Indicado para" />
                    )}
                />  

            <hr style={{margin: "4rem 0"}}></hr>


            <h3>OPCIONAL</h3>
            <Controller
                    control={control}
                    name="tags"
                    render={({ field: { onChange } })=>(
                        <AutoComplete onChange={onChange} label="Tags do seu produto" options={tagsSportiveArticles} {...configsStyleInputs} style={{width: "100%", marginTop: "2rem"}}/>
                    )}
                />
            <Controller
                control={control}
                name="images"
                render={({ field: { onChange } })=>(
                    <InputImage changeInputFile={onChange} amountImages={3} width="100%" style={{margin: "1rem 0"}}/>
                )}
            />
            <OptionsProduct control={control}  style={{margin: "3rem 0", width: "100%"}}/>
            <div style={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>     
                <Controller
                    control={control}
                    name="composition"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 200}} onChange={onChange} {...configsStyleInputs} label="Composição" />
                    )}
                />
                <Controller
                    control={control}
                    name="sewing"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 300}} onChange={onChange} {...configsStyleInputs} label="Costura" />
                    )}
                />
                <Controller
                    control={control}
                    name="obs"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 300}} onChange={onChange} {...configsStyleInputs} label="Observação" />
                    )}
                />
                <Controller
                    control={control}
                    name="guarantee"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 250}} onChange={onChange} {...configsStyleInputs} label="Garantia do fabricante " />
                    )}
                />
                <Controller
                    control={control}
                    name="origin"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 250}} onChange={onChange} {...configsStyleInputs} label="Origem" />
                    )}
                />
                <Controller
                    control={control}
                    name="contain"
                    render={({ field: { onChange } })=>(
                        <Input style={{width: 250}} onChange={onChange} {...configsStyleInputs} label="Contém" />
                    )}
                />
            </div>
        </div>
    )
}


export default function SectionAddProduct(){
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(productSchema) });

    const navigate = useNavigate()

    const submitFormProduct = (data) => {
        adminRequests.addProduct(data).then(res=>{
            if(!res.error){
                alert(res.message)
                navigate("/admin-account/products") 
            }
            else alert(res.message)
        })
        
    }
    return (
        <SectionNavigationStyled>
             <h1>Adicionar produto</h1>
             <div className="card-content">
                <Form onSubmit={handleSubmit(submitFormProduct)}>
                    <ToAddProductContainerStyled>
                        <div className="visual-card-edition">
                            <h3>VISUAL DO CARTÃO</h3>
                            <EditionCardExemple errors={errors} control={control}/>
                        </div>
                        <div className="edit-more-infos-product">
                            <h3>MAIS INFORMAÇÕES SOBRE O PRODUTO</h3>
                            <CompleteMoreInformation errors={errors} control={control}/>
                            <Button>Adicionar Produto</Button>
                        </div>
                    </ToAddProductContainerStyled>
                </Form>
             </div>
        </SectionNavigationStyled>
    )
}
