import styled from "styled-components";

type Props = {
  open: boolean;
}

export const Container = styled.div<Props>` 
  width: 100%;
  display: flex;
  flex-direction: column;
  color: black;

  .titleContainer {
    cursor: pointer;
    margin: 5px auto;
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: 10;
  }

  .icon {
    transform: rotate(180deg);
    transition: all ease .3s;
  }

  .childrenContainer {
    width: 100%;
    max-width: 1000px;
    min-height: 30px;
    margin-top: ${props => props.open ? '15px' : '-25px'};
    opacity: ${props => props.open ? '1' : '0'};
    transition: all ease-in-out .3s;
  }

  .filtersContainer {
    display: flex;
    justify-content: center;
    max-width: 550px;
    margin: 0 auto;
  }

  .categoriesContainer {
    display: flex;
    justify-content: center;
    max-width: 550px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  
` 

