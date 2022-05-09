import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  margin: 5px auto;
  height: 150px;
  background-color: #ffffff80;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  padding: 3px;
  transition: all ease .4s;
  border: thin transparent solid;
  max-width: 800px;
  display: flex;

  .dataContainer {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: slategray;
  }

  .title, .price, .description {
    color: inherit;
    width: 100%;
    margin-bottom: 8px;
    outline: 0;
    border: none;
    border-radius: 3px;

    &:focus{
      color: black;
    }
  }

  .description {
    resize: none;
    height: 50px;
  }

  .price {
    width: 80px;
    margin-right: 5px;
  }

  .actionButtons {
    display: flex;
    width: 100%;
  }    
      
  .editButton {
    width: 150px;
    height: 25px;
    border: thin solid white;
    border-radius: 5px;
    color: white;
    padding: 0;
    background-color: green;
    margin-right: 5px;
    cursor: pointer;
    transition: .3s;

    @media(max-width: 600px){
      transform: scale(.9);
      font-size: 11px;
    }

    &:hover{
      border: thin solid black;
    }
  }

  .resetButton {
    width: 100px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: thin solid white;
    border-radius: 5px;
    color: white;
    padding: 2px 5px;
    background-color: slategray;
    cursor: pointer;
    margin-right: 20px;
    transition: .3s;

    @media(max-width: 600px){
      transform: scale(.9);
      margin-right: 5px;
      font-size: 12px;
    }
      &:hover{
        border: thin solid black;
      }
  }

  .deleteButton {
    width: 100px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: thin solid white;
    border-radius: 5px;
    background-color: red;
    color: white;
    padding: 1px 5px;
    cursor: pointer;
    transition: .3s;

    @media(max-width: 600px){
      transform: scale(.9);
      font-size: 12px;
    }

    &:hover{
      border: thin solid black;
    }
  }

  .editButton:disabled{
    opacity: .4;
    cursor:auto;
        
    &:hover{
      border: thin solid white;
    }
  }
  
  .imageContainer {
    width: 40%;
    max-width: 200px;
    display: flex;
    align-items: center;
    background-color: white;
    margin-right: 10px;
  }

  .imageContainer__img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }

`