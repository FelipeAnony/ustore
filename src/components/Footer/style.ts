import styled from "styled-components";

export const Container = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  height: 200px;

  .innerContainer {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .logo {
      color: green;
      font-size: 28px;
      font-weight: 700;
      margin: 40px 0;
    }

    .menu {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;

      a {
        text-decoration: none;
        margin:0 10px;
        color: white;

        @media(max-width: 400px) {
          font-size: 10px;
          margin: 0 5px;
        }

        @media(max-width: 600px) {
          font-size: 12px;
        }
      }
    }
  }

`