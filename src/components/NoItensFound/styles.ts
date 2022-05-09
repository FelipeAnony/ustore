import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 600px;
  height: 200px;
  background-color: whitesmoke;
  margin:10px auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .noItensFound__title {
    font-size: 20px;
    color: darkslategray;
    margin: 0;
  }

  .noItensFound__p {
    text-align: center;
  }

  .noItensFound__button {
    background-color: black;
    color: white;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
    }

  }
`