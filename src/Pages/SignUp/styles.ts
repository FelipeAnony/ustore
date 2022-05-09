import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  width: 100%;
  color: white;
  background-color: black;
  border-radius: 5px;
  border: thin solid white;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    transition: .3s;
    background-color: green;
  }
`
export const acceptInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 400px;
  min-height: 40px;

  label {
    display: flex;
    align-items: center;
  }

  a {
    color: inherit;
    margin: 0 3px;
  }

`
