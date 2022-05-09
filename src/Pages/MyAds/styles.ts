import styled from "styled-components";


export const Noads = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 5px auto;
  height: 150px;
  background-color: #ffffff80;
  border-radius: 3px;
  box-shadow: 0 0 3px #999;
  padding: 3px;
  transition: all ease .4s;
  border: thin transparent solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: slategray;

  .makeAnAd {
    text-decoration: none;
    color: white;
    background-color: green;
    border-radius: 5px;
    padding: 2px 5px;
    margin-top: 5px;

    &:hover{
      opacity: .9;
    }
  }
`