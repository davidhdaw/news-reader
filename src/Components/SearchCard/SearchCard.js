import React from "react";
import './SearchCard.css'

const SearchCard = ({story}) => {
    return(
        <div className="searchCard">
            <h1><a href={story.web_url} className="storyLink">{story.headline.main}</a></h1>
            <p>{story.abstract}</p>
        </div>
    )
}

export default SearchCard