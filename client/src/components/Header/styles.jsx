import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  background: #1d1919;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  top: 0;
  z-index: 10;

  .content {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      color: #FFC947;
    }
  }
`;
const InputSearchStyled = styled.div`
  background: #ffffffe4;
  width: 300px;
  height: 35px;
  position: relative;
  border-radius: 0.2rem;
  transition: .3s;
  input {
    all: unset;
    position: absolute;
    left: 1rem;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    color: #000000;
  }
  button {
    all: unset;
    position: absolute;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    color: #000;
    font-size: 1.1rem;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    &:hover {
      background: #28272731;
    }
  }
`;

const FavoriteButtonStyled = styled.button`
    all: unset;
    font-size: 1.6rem;
    cursor: pointer;
    i{
        transition: .1s;
    }
    &:hover i{
        transform: scale(1.3);
        color: red;
    }
`
const UserButtonStyled = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    span{
      text-transform: capitalize;
    }   
    .icon-user{
        font-size: 1.5rem;
        margin-right: .2rem;
    }
    .icon-arrow{
        font-size: 1.7rem;
        transition: .3s;
    }
    .popUp-user{
        position: absolute;
        width: 200px;
        top: 2.4rem;
        right: -1rem;
        background: #1d1717f4;
        backdrop-filter: blur(3px);
        border-radius: 1rem;
        padding: 1rem;
        cursor: default;
        /* border: 2px solid #fff; */
        li, button{
          all: unset;
          display: inline-block;
          width: 100%;
          padding-top: 1rem;
          transition: .2s;
          color: #ffffffc5;
          cursor: pointer;
          &:hover{
            padding-left: 1rem;
            color: #fff;
          }
        }
        &::before{
            content: "";
            position: absolute;
            width: 100%;
            height: 30px;
            background: transparent;
            left: 0;
            top: -1.5rem;
            cursor: pointer;
        }
    }
`

const CartButtonStyled = styled.div`
  position: relative;
  .button-cart{
    position: relative;
    cursor: pointer;
    i{
        font-size: 1.5rem;
    }
    .quantity-items{
        position: absolute;
        top: -.4rem;
        right: -.6rem;
        background: #ffce76;
        color: #000;
        width: 18px;
        border-radius: 50%;
        font-size: .8rem;
        font-weight: bold;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
    .popUp-cart{
      position: absolute;
      max-width: 360px;
      top: 2.4rem;
      right: -2rem;
      background: #fff;
      border: 1.4px solid #0000007e;
      border-radius: 1rem;
      padding: 1rem;
      cursor: default;
      text-align: end;
      color: #000;
      &::before{
            content: "";
            position: absolute;
            width: 100%;
            height: 30px;
            background: transparent;
            left: 0;
            top: -1.5rem;
            cursor: pointer;
      }
      ul{
        width: 330px;
        li{
          width: 100%;
          height: 80px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: .7rem;
          border-radius: .4rem;
          padding: .6rem;

          span{
            display: inline-block;
            text-align: start;
            font-size: .8rem;
          }
          img{
            width: 60px;
            height: 60px;
            object-fit: cover;
            flex: none;
            margin-right: .4rem;
          }
        }
      }
      hr{
        margin-top: 1rem;
      }
      .subtotal-products{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: .7rem;
        span{
          margin-right: 1rem;
        }
      }
      p{
        text-align: end;
        font-size: .8rem;
        color: #000000c8;
      }
      a{
        all: unset;
        display: inline-block;
        margin-top: 2rem;
        background: #ffc456;
        padding: .6rem 1rem;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: .5rem;
        opacity: .8;
        transition: .2s;
        &:hover{
          opacity: 1;
        }
      }
    }
`
export { HeaderStyled, InputSearchStyled, FavoriteButtonStyled, UserButtonStyled, CartButtonStyled };
