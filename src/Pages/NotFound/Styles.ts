import styled from "styled-components";

export const Container = styled.div `
  .title, .number, .message {
   color: slategray;
   margin: 0 5px;
  
  }

  .title {
    font-size: 3em;
  }

  .number {
    font-size: 5em;
    letter-spacing: 10px;
  }

  .message{
    font-size: 21px;
    margin-bottom: 10px;
  }

  .backButton {
    text-decoration: none;
    color: white;
    border: thin solid white;
    border-radius: 3px;
    background-color: black;
    padding: 2px 30px;

    &:hover {
      background-color: green;
    }
  }

`