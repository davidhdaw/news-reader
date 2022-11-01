import React from "react";

const StoryCard = ({story}) => {

    return(
        <div className="StoryCard">
            <h2>{story.title}</h2>
            <p>{story.abstract}</p>
        </div>
    )
}

export default StoryCard