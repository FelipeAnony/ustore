import styled from "styled-components";

type Props = {
  itensDirection: boolean;
}

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

export const MainMenuContainer = styled.div<Props>`
  width: calc(100% - 20px);
  min-height: calc(100vh - 300px);
  background-color: #ddd;
  margin: 10px 10px 2px 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  flex-direction: ${props => props.itensDirection ? 'column-reverse' : 'column'};
  align-items: center;
  justify-content: ${props => props.itensDirection ? 'flex-end' : 'flex-start'};
`

export const PagesContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 50px;
  background-color: #ddd;
  margin: 5px 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  display:flex;
  align-items: center;
  justify-content: center;
`