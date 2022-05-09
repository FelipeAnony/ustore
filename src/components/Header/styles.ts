import styled from "styled-components";

export const Header = styled.header`
  background-color: black;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`

export const Container = styled.div`
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .header__a {
    text-decoration: none;
  }

  .header__a--white {
    text-decoration: none;
    color: white;
    font-size: 14px;
      
    &:hover {
      color: #ccc;
    }
  }

  .header__logo {
    color: green;
    font-size: 28px;
    font-weight: 700;
    margin-left: 10px;
  }

  .header__nav {
    padding-top: 10px;
    padding-bottom:10px;
    margin-left: auto;
  }
  
  .header__ul, .header__li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header__ul {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .header__li {
    margin-right: 20px;
  }

  .header__sellButton {
    background-color: green;
    border-radius: 4px;
    padding: 5px;
  }

  .header__logout {
    background-color: transparent;
    border: none;
    color: white;
    font-family: inherit;
    cursor: pointer;

    &:hover {
      color: #ccc;
    }
  }
`