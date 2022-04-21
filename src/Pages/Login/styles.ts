import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 20px;
  width: 90%;
  height: 300px;
  max-width: 500px;
  background-color: #ddd;
  margin:0 auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .area {
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
  }

  .area--checkbox {
    display: flex;
    align-items: center;
  }

  .area--input {
    min-width: 250px;
    max-width: 400px; 

    input {
      width: 100%;
      font-size: 14px;
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 3px;
      outline:0;
      transition: all ease .4s;

      &:focus {
        border: 1px solid #333;
        color: #333;
      }
    }
  }
  button {
    padding: 5px 10px;
    width: 100%;
    color: white;
    background-color: black;
    border-radius: 5px;
    border: thin solid white;
    cursor: pointer;

    &:hover {
      transition: .3s;
      background-color: green;
    }
  }
  
`