import styled from "styled-components";


const ListPreferencesStyled = styled.div`
    width: 100%;
    h3{
        font-size: 1rem;
        margin-bottom: .8rem;
    }
    p{
        font-size: .9rem;
        color: #000000bf;
    }
    ul{
        margin-top: 2rem;
        li{
            width: 100%;
            border: 1.4px solid #00000026;
            border-radius: .4rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            margin-bottom: 1rem;
            transition: border .3s;
            &:hover {
                border: 1.4px solid #000000;
            }
            &:hover > i{
                transform: scale(1.2)
            }
            i{
                transition: transform .3s;
                font-size: 2.1rem;
                color: #185adb;
                margin-right: 1rem;
            }
            article > span{
                color: #000000a1;
                font-size: .8rem;
                text-transform: uppercase;
            }
            article > h4{
                text-transform: uppercase;
            }
        }
    }
`

export {ListPreferencesStyled}