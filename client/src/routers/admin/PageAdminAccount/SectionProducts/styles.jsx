import styled from "styled-components"

const SectionProductsStyled = styled.div`
    width: 100%;
    ul{
        .product-sheet{

        }
    }
`
const ListProductsStyled = styled.div`
    margin-top: 3rem;
    width: 100%;
    li{
        width: 100%;
        height: 170px;
        display: flex;
        justify-content: center;
        border: 1.4px solid #7979794d;
        border-radius: .7rem;
        padding: 1rem;
        align-items: flex-start;
        margin-bottom: 1rem;
        position: relative;
        overflow: hidden;
        animation: scale .5s ease-in;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        @keyframes scale{
            0%{ transform: scale(0)},
            100%{tranform: scale(1)}
        }
        .image-container{
            width: 30%;
            height: 100%;
            overflow: hidden;
            border-radius: .7rem;
            background: #3732324a;
            img{
                width: 100%;
                border-radius: .7rem;
                height: 100%;
               object-fit: contain;
            }
        }
        .publisher-email{
            position: absolute;
            max-width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            bottom: .2rem;
            left: .2rem;
            border-radius: 1rem;
            font-size: .8rem;
            text-transform: lowercase;
            background: #5c2cdf;
            color: #ffffff;
            padding: .2rem 1rem; 
        }
        article{
            width: 70%;
            padding-left: 1rem;
            h3{
                font-size: 1.1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p{
                font-size: .8rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .display-statistics{
                margin-top: 1rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                span{
                    background: #000;
                    padding: .4rem 1rem;
                    border-radius: .3rem;
                    color: #fff;
                    font-size: .8rem;
                    margin-right: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i{
                        margin-left: .4rem;
                    }
                }
            }
            .avaliations{
                display: inline-block;
                margin-top: 1rem;
                line-height: .8rem;
                cursor: default;
                .quantity{
                    text-transform: uppercase;
                    font-size: .8rem;
                    font-weight: bold;

                }
            }
        }
    }
`

export {SectionProductsStyled, ListProductsStyled}