import styled from "styled-components";

const CardStyled = styled.div`
    width: 280px;
    height: 450px;
    border: 1.4px solid #1d19192f;
    border-radius: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: .2s;
    display: block;
    flex: none;
    position: relative;
    background: #fff;
    padding: 1rem;
    .stamp{
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: 40px;
        height: 40px;
        background: #185ADB;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 20px;
        }
    }
    .container-image{
        width: 100%;
        height: 40%;
        background: #fff;
        display: flex;
        justify-content: center;
        margin-bottom: 1.4rem;
        overflow: hidden;
        img{
            width: auto;
            height: 100%;
        }
    }
    .description{
        width: 100%;
        height: 60%;
        position: relative;
        h3{
            font-size: 1.2rem;
            word-wrap: break-word;
        }
        .infos-descriptions{
            position: absolute;
            bottom: 2rem;
            h4{
                color: #185ADB;
                font-size: .9rem;
                margin-top: .3rem;
                margin-bottom: .8rem;
            }
            del{
                color: #0000007c;
                font-size: 1rem;
            }
            span{
                font-size: 1.4rem;
            }
        }
    }

`
const StarsAvaliationStyled = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li{
        font-size: 1.2rem;
        color: #FDB827;
    }
`
export {CardStyled, StarsAvaliationStyled}