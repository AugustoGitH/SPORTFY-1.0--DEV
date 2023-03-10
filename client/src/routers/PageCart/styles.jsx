import styled from "styled-components"


const NotItemsCartStyled = styled.div`
    width: 100%;
    text-align: center;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .container-icon{
        width: 300px;
        overflow: hidden;
        @keyframes animateCart{
            0%{ transform: translateX(-400px) },
            100%{ transform: translateX(0) }
        }
        i{
            font-size: 4rem;
            color: #185adb;
            animation: animateCart .5s ease-in;
        }
    }
    h4{
        font-size: 1.6rem;
        margin-top: 1rem;
        
    }
    p{
        font-size: 1.2rem;
        margin-top: 1rem;
        color: #000000cd;
    }
    a{
        display: inline-block;
        color: #fff;
        background: #185adb;
        border: 1.6px solid #185adb;
        padding: .8rem 1rem;
        border-radius: .5rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        margin-top: 2rem;
        transition: .3s;
        &:hover{
            background: transparent;
            color: #185adb;
        }
    }
    
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .content {
    width: 1100px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h2{
        color: #185adb;
        margin-bottom: 2rem;
    }
    .my-cart{
        width: calc(100% - 400px - 2rem);
        .field-simulate-freigth{
            width: 100%;
            margin-top: 3rem;
            h3{
                color: #000000b6;
            }
            .input-field{
                margin-top: 1rem;
                width: 100%;
                display: flex;
                button{
                    all: unset;
                    margin-left: 1rem;
                    padding: 0 .6rem;
                    font-size: .9rem;
                    text-transform: uppercase;
                    background: #185adb;
                    color: #fff;
                    border-radius: .4rem;
                    cursor: pointer;
                }
            }
        }
        ul{
            width: 100%;
            li{
                width: 100%;
                border: 1.4px solid #00000037;
                padding: 2rem;
                border-radius: .8rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 1rem;
                position: relative;
                transition: .2s;
                .trash-button{
                    all: unset;
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    font-size: 1.4rem;
                    cursor: pointer;
                    transition: .2s;
                    &:hover{
                        transform: scale(1.3)
                    }
                    
                }
                .product-cart{  
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    img{
                        width: 130px;
                        height: 130px;
                        object-fit: cover;
                        flex: none;
                        margin-right: 1rem;

                    }
                    article{
                        h4{
                            margin-bottom: 1rem;
                            width: 440px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        span{
                            display: inline-block;
                            font-size: .8rem;
                            width: 100%;
                            margin-bottom: .3rem;
                            color: #000000b8;
                        }
                        .table-options{
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            span{
                                text-transform: capitalize;
                            }
                        }
                    }
                }
                .line-horizontal{
                    width: 100%;
                    height: 2px;
                    border-radius: .3rem;
                    margin: 1rem 0;
                    background: #00000042;
                }
                .display-product-control{
                    width: 100%;
                    .field-product-value{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 2rem;
                        p{
                            del{
                                text-decoration: line-through;
                                color: #1a1a1a98;
                            }
                            span{
                                margin-left: 1rem;
                            }
                        }
                        .control-quantity-field{
                            display: flex;
                            align-items: center;
                            .control-quantity{
                                margin-left: 1rem;
                                display: flex;
                                align-items: center;
                                button{
                                    all: unset;
                                
                                    width: 25px;
                                    height: 25px;
                                    background: black;
                                    color: #fff;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 50%;
                                    font-size: 1.1rem;
                                    cursor: pointer;
                                }
                                .quantity-view{
                                    margin: 0 .6rem;
                                    width: 40px;
                                    background: #dbdbdbb9;
                                    padding: .5rem 0;
                                    text-align: center;
                                    border-radius: .6rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .purchase-summary{
        width: 400px;
        ul{
            width: 100%;
            background: #b1b1b11a;
            padding: 3rem 2rem;
            border-radius: .7rem;
            
            li{
                width: 100%;
                margin-bottom: 1.5rem;
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #00000013;
                padding-bottom: 1.5rem;
                
                span{
                    font-size: 1.1rem;
                    color: #000000c4;
                    &:nth-child(2){
                        text-align: end;
                    }
                    p{
                        font-size: .8rem;
                        b{font-size: .8rem;}
                    }
                    b{
                        font-size: 1.1rem;
                        color: #000000;
                    }
                }
                button{
                        all: unset;
                        font-size: .8rem;
                        text-decoration: underline;
                        color: #4545f0;
                        cursor: pointer;
                    }
                nav{
                    margin-top: 2rem;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    a{
                        all: unset;
                        width: 100%;
                        background: #ffc456;
                        color: #000;
                        font-size: 1.2rem;
                        padding: .7rem 0;
                        cursor: pointer;
                        border-radius: .5rem;
                        text-align: center;
                        transition: .2s;
                        margin-bottom: .5rem;
                        border: 1.4px solid #ffc456;
                        &:hover{
                            opacity: 1;
                        } 
                        &:nth-child(2){
                            background: transparent;
                            color: #185adb;
                            border: 1.4px solid #185adb;
                            &:hover{
                                background: #185adb;
                                color: #fff;
                            }
                        }
                    }
                }
                
            }
        }
    }
  }
`;
export {NotItemsCartStyled, Container}