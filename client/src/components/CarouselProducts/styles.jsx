import styled from "styled-components";


const CorouselProductsStyled = styled.div`
width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 4rem;
    position: relative;
    h1{
        font-size: 1.5rem;
        padding: .3rem 2rem;
        position: relative;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        i{
            margin-right: .4rem;
            font-size: 2rem;
        }
    }
    .content{
        width: 100%;
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        gap: 1rem;
        padding: 2rem;
        &::-webkit-scrollbar {
            height: 6px;
        }
        &::-webkit-scrollbar-track {
             background: #f1f1f1;
             border-radius: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background: #000;
            border-radius: 6px;
        }
    }
    .button-control{
        all: unset;
        position: absolute;
        font-size: 1.1rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: #1d191996;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: .2s;
        &:hover{
            background: #1d1919;
        }
    }
    .button-left-direction{
        left: 0;
    }
    .button-right-direction{
        right: 0;
    }
`

export {CorouselProductsStyled}