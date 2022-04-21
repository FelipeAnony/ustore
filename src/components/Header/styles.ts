import styled from "styled-components";

export const Header = styled.header`
  background-color: black;
  width: 100%;
`

export const Container = styled.div`
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  .logo {
    color: green;
    font-size: 28px;
    font-weight: 700;
    margin-left: 10px;
  }

  nav {
    padding-top: 10px;
    padding-bottom:10px;
    margin-left: auto;
    
    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-right: 20px;

      a {
        color: white;
        font-size: 14px;
      
        &:hover {
          color: #ccc;
        }

        &.sellButton {
          background-color: green;
          border-radius: 4px;
          padding: 5px;
        }

      }

    }

  }


`