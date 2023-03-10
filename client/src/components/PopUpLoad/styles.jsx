import styled from "styled-components";


const PopUpLoadStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    backdrop-filter: blur(2px);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: .3s;
    h4{
        margin-top: 2rem;
        text-transform: uppercase;
        font-weight: 100;
    }
    .out-operation{
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            all: unset;
            background: #2940d3b7;
            color: #fff;
            cursor: pointer;
            padding: .8rem 2rem;
            font-size: 1.1rem;
            text-transform: uppercase;
            border-radius: .4rem;
            margin-top: 3rem;
            transition: .3s;
            &:hover{
                background: #2940d3;
            }
        }
        h3{
            font-size: 1.7rem;
            text-transform: uppercase;
            position: relative;
            i{
                font-size: 3rem;
                /* transform: rotate(30deg); */
                position: absolute;
                top: -2rem;
            }
        }
    }
`

export {PopUpLoadStyled}