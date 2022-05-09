import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 30px);
  margin: 0 auto;
  margin-bottom: 5px;
  height: 150px;
  background-color: #ffffff80;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  padding: 5px;
  cursor: pointer;
  transition: all ease .4s;
  border: thin transparent solid;

  &:hover {
    border: thin green solid;
  }

`

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  display: flex;
  margin: 0 auto;

  .itenCard__dataContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .itenCard__title,
  .itenCard__price, 
  .itenCard__state, 
  .itenCard__date {
    margin: 0;
  }

  .itenCard__title {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 500px) {
      font-size: 14px;
    }

    @media (min-width: 500px) and (max-width: 700px) {
      font-size: 18px;
    }
  }

  .itenCard__date, 
  .itenCard__condition {
    color: slategrey;
    font-size: 12px;
  }
  
  .itenCard__imageContainer {
    width: 300px;
    display: flex;
    align-items: center;
    background-color: white;
    margin-right: 10px;
  }

  .itenCard__img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }

`
