import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, auto);
`

export const UpMenuContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 50px;
  background-color: #ddd;
  margin: 10px 10px 0px 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainMenuContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 600px;
  background-color: #ddd;
  margin: 10px 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  align-items: center;
`