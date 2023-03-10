import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .content {
    width: 1100px;
    position: relative;
    .painel {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }
`;
const NavigationPainelStyled = styled.div`
  width: 230px;
  margin-right: 2rem;
  position: sticky;
  top: 10px;
  ul {
    width: 100%;
    border: 1.4px solid #00000026;
    border-radius: .5rem;
    padding: 0.7rem;
    margin-top: 1rem;
    .mark-navigator{
        border-bottom: 1.4px solid #185adb;
        color: #185adb;
        i{
            transform: scale(1.2);
        }
    }
    button {
      all: unset;
      width: 100%;
      li{
        border-bottom: none;
        &:hover {
          border-bottom: none;
        }
      }
    }
    li {
      padding: 1rem;
      border-bottom: 1.4px solid #00000026;
      display: flex;
      align-items: center;
      justify-content: start;
      color: #181818b9;
      cursor: pointer;
      transition: border .3s;
      &:hover {
        border-bottom: 1.4px solid #185adb;
        color: #185adb;
        i {
          transform: scale(1.2);
        }
      }
      i {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        transition: transform .3s;
      }
    }
  }
`;

const SectionNavigationStyled = styled.div`
    width: calc(100% - 230px - 2rem);
    h1{
        font-size: 1.6rem;
        color: #185adb;
    }
    .card-content{
        margin-top: 1rem;
        border: 1.4px solid #00000026;
        padding: 2rem;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`
const AwayMessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  span {
    font-size: 1.4rem;
  }
  p{
    text-align: center;
    margin-top: .3rem;
    font-size: .9rem;
    color: #000000bc;
  }
  .button-link {
    margin-top: 1.5rem;
    background: #185adb;
    border: 1.5px solid #185adb;
    color: #fff;
    padding: 0.7rem 2rem;
    border-radius: 0.4rem;
    text-transform: uppercase;
    transition: .3s;
    &:hover{
        background: transparent;
        color: #185adb;
    }
  }
`;



export { Container, NavigationPainelStyled, SectionNavigationStyled, AwayMessageStyled };
