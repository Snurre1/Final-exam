import React from "react";
import * as SV from "./index.styled";
import {Link} from "react-router-dom";




function Venue({venue: {name, media, id, location, rating}}) {
  

  return (
    
      <SV.VenueWrapper>
      <SV.TitleWrapper>{name}</SV.TitleWrapper>
      <SV.VenueImageContainer><SV.VenueImage src={media} alt={name}></SV.VenueImage></SV.VenueImageContainer>
      <SV.CountryWrapper>Country: {location.country}</SV.CountryWrapper>
      <SV.CityWrapper>City: {location.city} </SV.CityWrapper>
     <Link to={id} style={{margin: "auto"}}><SV.ViewListingBtn>View Venue</SV.ViewListingBtn></Link>
      </SV.VenueWrapper> 
      
  ) 
 
   
}
export default Venue