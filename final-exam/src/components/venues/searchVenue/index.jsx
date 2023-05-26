import React from "react";
import * as SBar from './index.styled'
import { useState } from "react";
import { API_VENUE_URL } from '/home/snurre/React/final-exam/src/shared/url/url.js';
import  { SearchResultsList } from "../searchbarvenuelist";

export const  SearchBar = () =>{
    const [input, setInput] = useState("");
    const [results, setResults] = useState([])
    const fetchData = (value) => {
        fetch(API_VENUE_URL).then((response) => response.json()).then(json =>{
            const results = json.filter((name) => {
                return name && name.name && name.name.toLowerCase().startsWith(value);
                
            });
            setResults(results)
        });
        
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return(
    <div><SBar.H1Straight>Search for Venues</SBar.H1Straight><SBar.Straight>
        <SBar.Search>Search</SBar.Search>
        <input value={input} onChange={(e) => handleChange(e.target.value) }></input></SBar.Straight>
        <SearchResultsList results={results}/>
    </div>)
}
    
    
    
    
    
        

