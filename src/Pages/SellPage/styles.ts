import styled from "styled-components";

export const Container = styled.div`
  .priceLabel{
    margin-right: 10px;
    .priceInput{
      width: 60px;
      margin: 5px 5px;
      outline: none;
      border: thin transparent solid;
      transition: all ease .4s;
      border-radius: 3px;

      &:focus{
        border: thin solid black;
      }
    } 
  }

  .msgsContainer {
    margin: 10px 0px;
  
    .success {
      text-align:center;
      margin: 2px 0px;
      background-color: #cafaca40;
      color: green;
      border: 1px solid green;
      padding: 0 10px;
      font-size: 12px;
      border-radius: 3px;
    }
    
  }



  select{
    margin-right: 10px;
  }

  .descriptionContainer{
    display: flex;
    flex-direction: column;
    width: 70vw;
    max-width: 400px;
    textarea {
      margin: 5px 0;
      resize: none;
      outline: none;
      border: none;
      border-radius: 3px;
    }
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      border: none;
      margin: 10px 0;
      border-radius: 3px;
      padding: 5px 10px;
      cursor: pointer;
      color: white;
      font-family: inherit;

      &:hover{
        opacity: .9;
      }
    }
    
    .sendButton {
      margin-right: 30px;
      background-color: green;
    }

    .clearButton {
      background-color: black;
    }
  }
`