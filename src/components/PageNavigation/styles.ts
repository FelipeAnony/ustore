import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .pageNavigation__arrowIcon {
    height: 30px;
    width: 20px;
    padding: 1px;
    margin-right: 3px;

    &:hover{
      background-color: #aaa;
    }
  }

  .pageNavigation__page {
    height: 30px;
    padding: 2px 5px;
    border: thin #bbb solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  .pageNavigation__page--selected {
    background-color: #aaa;
  }
    
  .pageNavigation__number {
    margin: 0;

    &:hover {
      background-color:#aaa;
    }
  }
`
