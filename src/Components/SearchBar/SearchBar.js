import React, { useState } from "react";
import './SearchBar.css'
import { useNavigate } from "react-router";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchError, setSearchError] = useState(false)
    const navigate = useNavigate()

    const submitSearch = (event) => {
        event.preventDefault();
        setSearchError(false)
        if (searchTerm) {
          navigate(`/search/${searchTerm}`)
          setSearchTerm('')
        } else {
          setSearchError(true)
        }
      
      }

    return(
        <form className="searchBar">
            {searchError && <h3 className="searchError">Please Enter Search Term!</h3>}
            <input
          name='search'
          value={searchTerm}
          placeholder="Input search term"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className='searchButton' onClick={(e) => submitSearch(e)}>Search</button>
        </form>
    )
}

export default SearchBar