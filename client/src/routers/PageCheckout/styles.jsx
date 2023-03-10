import styled from "styled-components";

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
    .title-head {
      width: 100%;
      background: #185adb;
      border-radius: 0.4rem;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
      color: #fff;
      padding: 0.9rem 1.3rem;
    }
    .shipping-payment {
      width: calc(100% - 300px - 2rem);
      .card-list-container {
        width: 100%;
        margin-top: 1rem;

        .notes-list {
          width: 100%;
          .note-box {
            width: 100%;
            background: #f9f9f9;
            border: 1.2px solid #000;
            border-radius: 0.4rem;
            padding: 1.4rem 2.4rem;
            margin-bottom: 1.5rem;
            .products-sumary {
              .products-list-ul {
                margin-top: 2rem;
                width: 100%;
                li {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: center;
                  border-bottom: 1.5px solid #0000002d;
                  padding-bottom: 1rem;
                  margin-bottom: 1rem;

                  p {
                    font-size: 0.85rem;
                  }
                  .product {
                    width: 100%;
                    margin-top: 1rem;
                    .sup {
                      width: 100%;
                      display: flex;
                      margin-bottom: 1rem;
                      img {
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                        margin-right: 1rem;
                        flex: none;
                      }
                      article {
                        p {
                          margin-bottom: 1rem;
                          font-size: 1rem;
                        }
                        .options-product {
                          display: grid;
                          grid-template-columns: repeat(
                            auto-fit,
                            minmax(100px, 1fr)
                          );
                          span {
                            font-size: 0.8rem;
                            color: #000000d7;
                            text-transform: capitalize;
                          }
                        }
                      }
                    }
                    .sub {
                      span {
                        font-size: 0.87rem;
                      }
                    }
                  }
                }
              }
            }
            h3 {
              font-weight: 100;
              display: flex;
              text-transform: uppercase;
              color: #185adb;
              font-size: 1rem;
              align-items: center;
              i {
                margin-right: 0.6rem;
                font-size: 1.7rem;
              }
            }
            .payment-form-card{
                .button-pay{
                    all: unset;
                    margin-top: 2rem;
                    background: #ffc456;
                    text-transform: uppercase;
                    padding: .7rem 1.5rem;
                    border-radius: .4rem;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
            .paymant-pix {
              h4 {
                margin-top: 1rem;
                font-size: 1.3rem;
              }
              .pix-step-list {
                margin: 2rem 0;
                li {
                  display: flex;
                  align-items: flex-start;
                  margin-bottom: 1rem;
                  font-size: 0.9rem;
                  span {
                    all: unset;
                    flex: none;
                    display: inline-flex;
                    margin-right: 0.6rem;
                    width: 25px;
                    height: 25px;
                    border: 1.6px solid #185adb;
                    color: #185adb;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                }

              }
              button{
                    all: unset;
                    background: #ffc456;
                    font-size: 1rem;
                    text-transform: uppercase;
                    font-weight: bold;
                    padding: .7rem 1.5rem;
                    border-radius: .4rem;
                    cursor: pointer;
                }
            }
          }
        }
      }
    }
    .address-summary {
      width: 300px;
      flex: none;
      .notes-list {
        width: 100%;
        margin-top: 1rem;
        .note-box {
          background: #f9f9f9;
          border: 1.2px solid #000;
          border-radius: 0.4rem;
          padding: 1.4rem 1.6rem;
          margin-bottom: 1rem;
          h3 {
            font-weight: 100;
            display: flex;
            text-transform: uppercase;
            color: #185adb;
            font-size: 1rem;
            align-items: center;
            i {
              margin-right: 0.6rem;
              font-size: 1.7rem;
            }
          }
          .address-box {
            margin-top: 1rem;
            span {
              display: inline-block;
              font-size: 0.86rem;
              color: #0000009a;
            }
            main {
              margin-top: 0.4rem;
              margin-bottom: 1rem;
            }
            button {
              all: unset;
              margin-top: 1rem;
              width: 100%;
              border: 1.4px solid #185adb;
              color: #185adb;
              text-align: center;
              border-radius: 0.4rem;
              cursor: pointer;
              padding: 0.8rem 0;
              text-transform: uppercase;
              transition: 0.2s;
              &:hover {
                background: #185adb;
                color: #fff;
              }
            }
          }
          .order-sumary-box {
            width: 100%;
            ul {
              width: 100%;
              margin-top: 1rem;
              .infos-value {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.6rem;
                span {
                  font-size: 0.8rem;
                  line-height: 0.9rem;
                  flex: none;
                  color: #000000b9;
                  b {
                    color: #000;
                  }
                  &:nth-child(1) {
                    width: 50%;
                  }
                  &:nth-child(2) {
                    width: 21%;
                  }
                  &:nth-child(3) {
                    width: 24%;
                  }
                }
              }
              .main-info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.6rem;
                span {
                  font-size: 0.9rem;
                  width: 50%;
                  &:nth-child(2) {
                    text-align: end;
                  }
                }
              }
              hr {
                margin: 2rem 0;
              }
            }
          }
        }
      }
    }
  }
`;

export { Container };
