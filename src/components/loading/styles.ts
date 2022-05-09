import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;

  .loading__logo {
    color: green;
    font-size: 48px;
    font-weight: 700;
    margin-left: 10px;
  }

  .loading__animation {
    max-width: 300px;
    filter: saturate(10);
  }

`