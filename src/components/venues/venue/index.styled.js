import styled from "styled-components";

export const VenueWrapper = styled.div`    
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
justify-content: center;
align-items: center;
width: 400px;
padding: 5px;
height: 500px;`

export const TitleWrapper = styled.h2`
text-align: center;
margin:auto;`

export const CityWrapper = styled.p`
text-align: center;
font-family: serif;`

export const CountryWrapper = styled.p`
text-align: center;
font-family: serif;`

export const VenueImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
`;

export const VenueImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const ViewListingBtn = styled.button`

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
