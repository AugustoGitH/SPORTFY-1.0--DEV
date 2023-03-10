import styled from "styled-components"

const ToAddProductContainerStyled = styled.div`
    width: 100%;
    .edition-card-exemple{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 3rem 0;
        .product-edit-field{
            margin-left: 4rem;
        }
    }
    .edit-more-infos-product{
        .group-inputs-product{
            margin-top: 1rem;
        }
    }
`
const Button = styled.button`
    all: unset;
    background: #1859dbad;
    color: #fff;
    padding: .6rem 1.4rem;
    margin-top: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s;
    border-radius: .4rem;
    &:hover{
        background: #1859db;
    }
`
export {ToAddProductContainerStyled, Button}