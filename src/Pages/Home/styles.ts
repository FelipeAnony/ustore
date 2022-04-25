import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: 
  "sideContainer upContainer"
  "sideContainer mainContainer"
  "sideContainer mainContainer";

  .sideContainer {
    grid-area: sideContainer;
  }
  .upContainer {
    grid-area: upContainer;
  }
  .mainContainer {
    grid-area: mainContainer;
  }
`

export const UpMenuContainer = styled.div`
  width: calc(100% - 10px);
  min-height: 100px;
  background-color: #ddd;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SideMenuContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 60vh;
  background-color: #ddd;
  margin:10px 10px;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainMenuContainer = styled.div`
  width: calc(100% - 10px);
  min-height: 60vh;
  background-color: #ddd;
  margin: 10px 10px 10px 0px;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`