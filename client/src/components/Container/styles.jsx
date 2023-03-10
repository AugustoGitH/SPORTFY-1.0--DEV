import styled from "styled-components"


const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    .content{
        width: ${props=> `${props.widthContent}px`};
    }
`

export {ContainerStyled}