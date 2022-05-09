import styled from "styled-components";

type Props = {
  error: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 400px;
  min-height: 40px;
  
  label {
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    width: 100%;
    color: ${(props) => props.error ? 'red' : 'inherit'};  
  }

  input {
    width: 100%;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 3px;
    transition: all ease .4s;

    &:focus {
      border: thin solid #333;
      color: #333;
    }
    
  }

`

