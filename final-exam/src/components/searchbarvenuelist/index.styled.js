import styled from "styled-components";

export const SearchContainer = styled.div`
display: flex;
flex-flow: row wrap;
flex-direction: row;
flex-wrap: wrap;
align-content: flex-start;
justify-content: center;
align-items: flex-start;`

export const SearchVenueWrapper = styled.div`    
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
justify-content: center;
align-items: center;
width: 400px;
padding: 5px;
height: 500px;`

export const SearchTitleWrapper = styled.h2`
text-align: center;
margin:auto;`

export const SearchCityWrapper = styled.p`
text-align: center;
font-family: serif;`

export const SearchCountryWrapper = styled.p`
text-align: center;
font-family: serif;`

export const SearchVenueImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
`;

export const SearchVenueImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const SearchViewListingBtn = styled.button`

  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &:hover {
    color: black;
  }
`
