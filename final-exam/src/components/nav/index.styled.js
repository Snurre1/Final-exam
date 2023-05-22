import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: nowrap;
list-style-type: none;
`

export const LiWrapper = styled.li`
padding: 5px;`

export const activeLink = styled.button`
border-top: 2px solid #777777;
  border-right: 2px solid #333333;
  border-bottom: 2px solid #444444;
  border-left: 2px solid #777777;`