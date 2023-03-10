import styled from "styled-components";


const SectionAddressesStyled = styled.div`
    width: 100%;
    .cards-addresses{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: .5rem;
        flex-wrap: wrap;
        .card{
            width: 250px;
            height: 160px;
            background: #eae9e6c1;
            padding: 1rem;
            border-radius: .4rem;
            cursor: default;
            transition: .3s;
            border-bottom: 1.4px solid #00000015;
            position: relative;
            overflow: hidden;
            transition: .2s;
            &:hover > .popUp-button{
                opacity: 1;
            }
            h4{
                margin-bottom: 1rem;
                text-transform: uppercase;
            }
            span{
                display: inline-block;
                margin-bottom: .3rem;
                font-size: .9rem;
                color: #000000c2;
                text-transform: capitalize;
            }
            .popUp-button{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #686868e;
                display: flex;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(1px);
                opacity: 0;
                transition: .2s;
                button{
                all: unset;
                background: #185adb;
                color: #fff;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: .2s;
                opacity: .8;
                &:hover{
                    opacity: 1;
                }
            }
            }
        }
    }
    .button-container{
        width: 100%;
        margin-top: 7rem;
        text-align: center;
        button{
            all: unset;
            background: #185adb;
            border: 1.5px solid #185adb;
            color: #fff;
            padding: .5rem 2rem;
            border-radius: .4rem;
            font-size: 1.2rem;
            cursor: pointer;
            transition: .3s;
            &:hover{
                background: transparent;
                color: #185adb;
            }
        }
    }
`

export {SectionAddressesStyled}