import React from "react";
import './StoryCard.css'
import { Link } from "react-router-dom";

const StoryCard = ({story, setDetailView, setDetailedStory}) => {

const setDetail = () => {
    setDetailView(true)
    setDetailedStory(story)
    localStorage.setItem('detailStory', story.uri)
}
    return(
        <div className="storyCard">
            <p className="byline">{story.byline}</p>
            <h1 className="storyTitle" onClick={() => setDetail()}>{story.title}</h1>
            <p className="subHead">{story.abstract}</p>
        </div>
    )
}

export default StoryCard