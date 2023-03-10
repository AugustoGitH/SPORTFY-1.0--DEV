import styled from "styled-components"

const InputImageStyled = styled.div`
    .style-error{
        background: red;
        border-color: red;
        &:hover{
            color:red;
        }
    }
    label{
        display: inline-flex;
        width: 100%;
        background: #185adb;
        justify-content: center;
        align-items: center;
        padding: .6rem 0;
        border-radius: .4rem;
        color: #fff;
        cursor: pointer;
        border: 1.5px solid #185adb;
        transition: .2s;
        &:hover{
            background: transparent;
            color: #185adb;
        }
        i{
            margin-left: .4rem;
        }
    }
    input{
        display: none;
    }
    .pre-view{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 150px;
        overflow: hidden;
        background: #ecececb4;
        border-radius: .5rem;
        .image-container{
            width: 150px;
            height: 100%;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 .5rem;
            button{
                all: unset;
                background: #000000b0;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                top: .4rem;
                left: .4rem;
                cursor: pointer;
                font-size: 1.3rem;
                color: #fff;
                position: absolute;
            }
            img{
                width: auto;
                height: 100%;
            }
        }
    }
`

export {InputImageStyled}