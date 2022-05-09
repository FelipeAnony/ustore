import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .selectContainer {
    display: flex;
  }

  .selectContainer__select {
    margin: 0 auto;
    outline: none;
    color: black;
    border: none;
    background-color: transparent;
    padding: 2px 2px;
    font-family: inherit;
    cursor: pointer;
  }

`