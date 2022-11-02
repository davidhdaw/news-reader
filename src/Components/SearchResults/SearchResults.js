import React, {useEffect, useState} from "react";
import './SearchResults.css'
import { useParams } from "react-router-dom";
import { getSearchResults } from "../../apiCalls";
import SearchCard from "../SearchCard/SearchCard";

const SearchResults = () => {
let {id} = useParams(); 

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
            getSearchResults(id).then((data) => {
                setSearchResults(data.response.docs)
            })
        }, [id])

    return(
        <div className="detailedView">
            <h1>News Results for: {id}</h1>
            {console.log(searchResults)}
            {searchResults.map((story) => (
            <SearchCard story={story}/>
        ))}
        </div>
    )
}

export default SearchResults