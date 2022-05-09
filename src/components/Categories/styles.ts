import styled from "styled-components"

type Props = {
  isSelected: boolean;
}

export const Categories = styled.div<Props>`
  padding: 2px 5px;
  background-color: ${props => props.isSelected ? 'black' : '#aaa'};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 2px 5px;

  &:hover {
    background-color: black;
  }
`