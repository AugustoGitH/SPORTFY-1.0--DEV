import styled from "styled-components";

const SectionLoginStyled = styled.section`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .card-login {
    width: 400px;
  }
  .card-register {
    width: 400px;
  }
  .line-vertical {
    width: 1px;
    height: 300px;
    background: #00000047;
  }
  .input-card {
    width: 100%;
    margin: 0;
    margin-bottom: 1.4rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
  .button-submit {
    all: unset;
    width: 100%;
    background: #fdb827;
    text-align: center;
    padding: 0.8rem 0;
    font-weight: bold;
    opacity: 0.7;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.2s;
    color: #000;
    &:hover {
      opacity: 1;
    }
  }
`;

export {SectionLoginStyled};
