import styled from "styled-components";

type Props = {
  marginValue: number;
}

export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .photoGallery__arrow {
    opacity: 1;
  }

  .photoGallery__arrow {
    position: absolute;
    width: 25px;
    color: white;
    font-size: 26px;
    height: 60px;
    background-color: #00000040;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
      background-color: #00000060;
    }
  }

  .left{
    left: 0;
  }

  .right {
    right: 0;
  }

  .photoGallery__pageCounter {
    position: absolute;
    top: 93%;
    left: 50%;
  }

  .photoGallery__row {
    display: flex;
    min-height: 400px;
    align-items: center;
    justify-content: center;
    margin-left: ${props => `${props.marginValue}px`};
    transition: all ease .4s;
    background-color: white;
  }

  .photoGallery__imageContainer {
    width: 450px;
    min-height: 300px;
    max-height: 450px;
    display: flex;
      
    @media(max-width: 300px){
      width: 250px;
      max-height: 250px;
    }

    @media(max-width: 500px){
      width: 400px;
      max-height: 400px;
    }

  }
  
  .photoGallery__img {
    width: 100%;
  }

`