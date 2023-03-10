import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    .content{
        width: 1100px;
        display: flex;
        align-items: center;
        justify-content: center;
        .form-content{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .form-container-person{
            width: 650px;
            padding: 3rem 2rem;
            border: 1.3px solid #00000051;
            border-radius: .4rem;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            margin-right: 2rem;
            &::after{
                content: "Pessoa Fisíca";
                position: absolute;
                top: -1rem;
                left: 1rem;
                padding: .5rem 2rem;
                background: #fff;
                border: 1.3px solid #00000051;
                border-radius: .4rem;
            }
            .input-form{
                margin: 1rem .4rem;
                p{
                    line-height: 1rem;
                }
            }
        }
        .form-container-account{
            width: 400px;
            border: 1.3px solid #00000051;
            padding: 3rem 2rem;
            border-radius: .4rem;
            position: relative;
            &::after{
                content: "Sobre sua conta";
                position: absolute;
                top: -1rem;
                padding: .5rem 2rem;
                background: #fff;
                left: 1rem;
                border: 1.3px solid #00000051;
                border-radius: .4rem;
            }
            .input-form{
                margin: 0;
                margin-top: 1.4rem;
                p{
                    line-height: 1rem;
                }
            }
            .checkbox-form{
                margin-top: 2rem;
                p{
                    font-size: .9rem;
                    font-family: "Helvetica";
                    line-height: 1.1rem;
                }
            }
            
            .alert-email{
                font-size: .8rem;
                color: #00000097;
                margin-top: .5rem;
            }
            .button-cont-forms{
                all: unset;
                width: 100%;
                text-align: center;
                background: #FFC947;
                padding: .8rem 0;
                border: 1px solid #FFC947;
                border-radius: .4rem;
                cursor: pointer;
                margin-top: 2rem;
                &:disabled{
                    background: transparent;
                    border: 1px solid #5f5e5e;
                    color: #5f5e5e;
                    cursor: default;
                    pointer-events: none;
                }
                
            }
            
        }
        }
        
    }
`

export {Container}