import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  .content {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    hr {
      width: 100%;
      margin: 1rem 0;
      opacity: 0.4;
    }
    .main-product-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 1rem 0;
      .infos-product {
        width: calc(100% - 350px);
        padding: 0 2rem;
        h1 {
          font-size: 1.8rem;
        }
        h4 {
          margin-top: 0.4rem;
        }
        .avaliation-rasting {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          cursor: default;
          .quantity-avaliation {
            font-size: 0.7rem;
            text-transform: uppercase;
            margin-left: 0.5rem;
            font-weight: bold;
            color: #000000c4;
          }
        }
        .price-field {
          display: flex;
          flex-direction: column;
          line-height: 2rem;
          span {
            font-size: 2.4rem;
          }
          del {
            text-decoration: line-through;
            font-size: 1.2rem;
            color: #0000007c;
          }
        }
        p {
          margin-top: 0.7rem;
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
    .technical-info {
      padding: 2rem 0;
      width: 100%;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        color: #000000c2;
        white-space: pre-line;
      }
    }
  }
`;

const RadioListOptionsStyled = styled.div`
  margin-top: 1rem;
  span {
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: ${props=> props.error ? "red" : "black"};
    i {
      margin-right: 0.2rem;
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .marked-option {
      opacity: 1;
    }
    li {
      margin: 0.2rem;
      text-transform: uppercase;
      font-size: 0.7rem;
      font-weight: bold;
      background: ${props=> props.error ? "red" : "black"};
      color: #fff;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      opacity: ${props=> props.error ? 1 : 0.3} ;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const FieldFreightStyled = styled.div`
  margin-top: 2rem;
  width: 400px;
  height: 100px;
  border: 1.4px solid #0000003c;
  border-radius: 0.6rem;
  padding: 0.7rem;

  p {
    all: unset;
    span {
      color: blue;
    }
  }
  ul {
    margin-top: 0.7rem;
    button {
      all: unset;
      background: #323131dc;
      color: #fff;
      font-size: 0.8rem;
      padding: 0.3rem 1rem;
      text-transform: capitalize;
      cursor: pointer;
      margin-right: 0.6rem;
      border-radius: 0.4rem;
      transition: 0.2s;
      &:hover {
        background: #323131;
      }
    }
  }
  .edition-cep {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    button {
      all: unset;
      margin-left: 0.7rem;
      padding: 0 0.7rem;
      background: #6a6aff;
      text-transform: uppercase;
      font-weight: bold;
      padding: 0.7rem;
      border-radius: 0.4rem;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      transition: 0.2s;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
`;

const VisualShowCaseStyle = styled.div`
  width: 350px;
  position: sticky;
  top: calc(68px + 2rem);
  .showcase {
    background: #ffffff;
    overflow: hidden;
    .image {
      width: 100%;
      height: 350px;
      object-fit: contain;
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.4rem;
    li {
      width: 80px;
      height: 80px;
      overflow: hidden;
      background: #fff;
      border: 1.7px solid #0000001e;
      margin-right: 1rem;
      padding: 0.4rem;
      border-radius: 0.3rem;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        border: 1.7px solid #3777f7;
      }
      img {
        height: 100%;
        width: auto;
      }
    }
  }
`;
const SpecificationsStyled = styled.div`
  margin-top: 3rem;
  p {
    font-size: 0.9rem;
    text-transform: capitalize;
    color: #000000c3;
    b {
      color: #000;
    }
  }
  ul {
    margin-top: 0.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    li {
      b {
        color: #000;
      }
      font-size: 0.9rem;
      text-transform: capitalize;
      color: #000000c3;
    }
  }
`;

const NavBuyCartFavStyled = styled.nav`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  button {
    all: unset;
    margin-right: 0.5rem;
    color: #000;
    background: #ffc947;
    border: 1.4px solid #ffc947;
    padding: 0.4rem 1.2rem;
    font-size: 1.1rem;
    text-transform: capitalize;
    border-radius: 0.4rem;
    font-weight: bold;
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    transition: 0.3s;
    i {
      font-size: 1.4rem;
      margin-right: 0.4rem;
      transition: transform 0.2s;
    }
    &:nth-child(2) {
      background: blue;
      color: #fff;
      border: 1.4px solid blue;
      &:hover {
        background: transparent;
        color: blue;
      }
    }
    @keyframes animateIcon {
      0%,
      100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(60deg);
      }
    }
    &:hover > i {
      animation: animateIcon 0.5s ease-in;
    }
  }
  .button-like {
    all: unset;
    font-size: 2.2rem;
    cursor: pointer;
    margin-left: 1rem;
    transition: 0.2s;
    i {
      font-size: 2.2rem;
    }
    &:hover {
      color: red;
      transform: scale(1.2);
      i {
        animation: none;
      }
    }
  }
  .button-marked-like{
      color: red;
      transform: scale(1.2);
      cursor: default;
      
      i {
        animation: none;
      }
  }
`;

const LoadedPopUpStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  VisualShowCaseStyle,
  LoadedPopUpStyled,
  RadioListOptionsStyled,
  FieldFreightStyled,
  NavBuyCartFavStyled,
  SpecificationsStyled,
};
