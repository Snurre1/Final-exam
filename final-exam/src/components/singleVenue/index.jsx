import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { API_VENUE_URL } from '/home/snurre/React/final-exam/src/shared/url/url.js';
import * as Single from './index.styled';


function SingleVenue() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetch(`${API_VENUE_URL}/${id}`);
                const json = await response.json();
                setData(json);
            } catch (error) {
                
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [id]);

    if (isLoading || !data) {
        return <Single.LoadingWrapper><svg className="pencil" viewBox="0 0 200 200" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="pencil-eraser">
            <rect rx="5" ry="5" width="30" height="30"></rect>
          </clipPath>
        </defs>
        <circle className="pencil__stroke" r="70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="439.82 439.82" stroke-dashoffset="439.82" stroke-linecap="round" transform="rotate(-113,100,100)" />
        <g className="pencil__rotate" transform="translate(100,100)">
          <g fill="none">
            <circle className="pencil__body1" r="64" stroke="hsl(223,90%,50%)" stroke-width="30" stroke-dasharray="402.12 402.12" stroke-dashoffset="402" transform="rotate(-90)" />
            <circle className="pencil__body2" r="74" stroke="hsl(223,90%,60%)" stroke-width="10" stroke-dasharray="464.96 464.96" stroke-dashoffset="465" transform="rotate(-90)" />
            <circle className="pencil__body3" r="54" stroke="hsl(223,90%,40%)" stroke-width="10" stroke-dasharray="339.29 339.29" stroke-dashoffset="339" transform="rotate(-90)" />
          </g>
          <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
            <g className="pencil__eraser-skew">
              <rect fill="hsl(223,90%,70%)" rx="5" ry="5" width="30" height="30" />
              <rect fill="hsl(223,90%,60%)" width="5" height="30" clip-path="url(#pencil-eraser)" />
              <rect fill="hsl(223,10%,90%)" width="30" height="20" />
              <rect fill="hsl(223,10%,70%)" width="15" height="20" />
              <rect fill="hsl(223,10%,80%)" width="5" height="20" />
              <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
              <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
            </g>
          </g>
          <g className="pencil__point" transform="rotate(-90) translate(49,-30)">
            <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
            <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
            <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
          </g>
        </g>
      </svg></Single.LoadingWrapper>
    }

    if (isError) {
        return <div>Error</div>;
    }

    

    return (
        
        
           <Single.SingleWrapper> 
                <h1>{data.name}</h1>
                <Single.SingleVenueImageContainer><Single.SingleVenueImage src={data.media} alt={data.name}></Single.SingleVenueImage></Single.SingleVenueImageContainer>
                <h3>Description:</h3><Single.DescriptionContainer> {data.description}</Single.DescriptionContainer>
                <Single.MetaContainer><Single.MetaBox>Country: {data.location.country}</Single.MetaBox>
                <Single.MetaBox>City: {data.location.city}</Single.MetaBox>
                <Single.MetaBox> Amount of guests: {data.maxGuests}</Single.MetaBox></Single.MetaContainer>
               <Single.MetaContainer><Single.MetaBox>Breakfast: {data.meta.breakfast.toString()}</Single.MetaBox><Single.MetaBox>Parking: {data.meta.parking.toString()}</Single.MetaBox><Single.MetaBox>Pets: {data.meta.pets.toString()}</Single.MetaBox><Single.MetaBox>wifi: {data.meta.wifi.toString()}</Single.MetaBox></Single.MetaContainer>
               <p>Rating: {data.rating}</p>
               <p>Price: {data.price}</p>
            </Single.SingleWrapper>
        
       
    );
};

export default SingleVenue