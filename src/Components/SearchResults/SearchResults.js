import React, {useEffect, useState} from "react";
import './SearchResults.css'
import { useParams } from "react-router-dom";
import { getSearchResults } from "../../apiCalls";
import SearchCard from "../SearchCard/SearchCard";

const SearchResults = () => {
let {id} = useParams(); 

    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
            getSearchResults(id).then((data) => {
                setSearchResults(data.response.docs)
                setLoading(false)
            })
        }, [id])

    return(
        <div className="detailedView">
            {loading && <h2>Loading...</h2>}
            <h1>News Results for: {id}</h1>
            {console.log(searchResults)}
            {searchResults.map((story) => (
            <SearchCard story={story}/>
        ))}
        {!loading && !searchResults[0] && <h2>Oops. No results found.</h2>}
        </div>
    )
}

export default SearchResults