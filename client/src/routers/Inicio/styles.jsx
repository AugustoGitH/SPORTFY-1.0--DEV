import styled from "styled-components";

const RangeStyled = styled.div`
    background: #FFC947;
    padding: 1rem 2rem;
    h1{
        margin-left: 2rem;
        width: 1100px;
        text-transform: uppercase;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        i{
            font-size: 1.7rem;
            transform: rotate(-50deg)
        }
    }
`

const SectionFilterStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle-model{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #FFC947;
        margin: 0 .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .3s;
        img{
            width: 40px;
            transition: .2s;
        }
        &:hover img{
          transform: scale(1.2)  
        }
    }
`


export {RangeStyled, SectionFilterStyled}