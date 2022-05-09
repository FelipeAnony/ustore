import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;
  width: 80%;
  max-width: 500px;
  height: 30px;
  background-color: whitesmoke;
  padding-left: 10px;
  display: flex;

  .searchBar__input {
    width: calc(100% - 40px);
    height: 100%;
    outline: none;
    background-color: transparent;
    border: 0;
  }
  
  .searchBar__iconContainer {
    margin: 0 auto;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`