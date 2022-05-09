import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 1000px;
  background-color: #ddd;
  margin:10px auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;

 .backButtonContainer {
    width: 60px;
    color: slategray;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
      color: black;
    }
 }

 .imagesContainer {
    width: 100%;
    max-width: 450px;
    margin-right: auto;
    max-height: 450px;
    overflow: hidden;

    @media(max-width: 500px) {
      max-width: 400px;
      max-height: 400px;
      margin: 0 auto;
    }
 }

 .innerFlexContainer {
    width: 100%;
    min-height: 300px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    .infoContainer {
      margin-left: 20px;
      margin-right: auto;

      h1 {
        margin: 5px 0;
      }

      p {
        margin: 0;
      }

      .description {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        .condition {
          color: slategray;
          margin-bottom: 5px;
        }

        .price {
          font-size: 22px;
          margin-bottom: 20px;
        }
        
      }

      .sellerContactInfo {
        display: flex;
        flex-direction: column;
       
        div {
          margin-top: 5px;
          display: flex;
          align-items: center;

          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
`