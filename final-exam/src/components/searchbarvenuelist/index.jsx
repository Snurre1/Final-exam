import React from "react";
import * as S from './index.styled'
import { Link } from "react-router-dom";
export const SearchResultsList = ({results}) => {
    return (<S.SearchContainer>
        {
            results.map((result, id) => {
                return (
                    <S.SearchVenueWrapper key={id}>
                    <S.SearchTitleWrapper >{result.name}</S.SearchTitleWrapper>
                    <S.SearchVenueImageContainer><S.SearchVenueImage src={result.media} alt={result.name}></S.SearchVenueImage></S.SearchVenueImageContainer>
                    <S.SearchCountryWrapper>Country: {result.location.country}</S.SearchCountryWrapper>
                    <S.SearchCityWrapper>City: {result.location.city} </S.SearchCityWrapper>
                   <Link to={id} style={{margin: "auto"}}><S.SearchViewListingBtn>View Listing</S.SearchViewListingBtn></Link>
                    </S.SearchVenueWrapper>
                )
            })
        }
        </S.SearchContainer> 
)}