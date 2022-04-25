import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 260px);
`

export const ErrorMessage = styled.div`
  margin: 2px 0px;
  background-color: #FFCACA50;
  color: red;
  border: 1px solid red;
  padding: 0 10px;
  font-size: 12px;
  border-radius: 3px;
`

export const BackgroundCard = styled.div `
  width: calc(100% - 20px);
  min-height: calc(100vh - 260px);
  background-color: #ddd;
  margin:10px auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: slategray;
    margin: 0;
  }
  
`