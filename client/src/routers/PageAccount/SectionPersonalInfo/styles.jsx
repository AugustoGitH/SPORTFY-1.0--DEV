import styled from "styled-components";

const PersonalInfosStyled = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h2{
        font-size: 1.1rem;
    }
    .personal-data{
        width: 50%;

    }
    .line-vertical{
        width: 1.4px;
        height: 400px;
        background: #00000026;
        margin: 0 3rem;
    }
    .acess-data{
        width: 50%;
        .buttons-edit{
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            button{
                all: unset;
                width: 160px;
                background: #185adb;
                border: 1.5px solid #185adb;
                color: #fff;
                padding: .6rem 0;
                text-align: center;
                border-radius: .3rem;
                cursor: pointer;
                transition: .3s;
                &:hover{
                    background: transparent;
                    color: #185adb;
                }
            }
        }
        .preferences{
            margin-top: 3rem;
            p{
                font-size: .8rem;
                line-height: 1.1rem;

            }
        }
    }
`

export {PersonalInfosStyled}