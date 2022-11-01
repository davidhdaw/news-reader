import React, {useEffect, useState} from "react";
import { getTopStories } from "../../apiCalls";
import StoryCard from "../StoryCard/StoryCard";

const FrontPage = () => {
    const [topStories, setTopStories] = useState([])

    useEffect(() => {
        getTopStories().then((data) => {
            setTopStories(data.results)
            console.log(topStories)
        })
    }, [])

    return(
        <div className="FrontPage">
        {topStories.map((story) => (
            <StoryCard story={story} />
        ))}
        </div>
    )
}

export default FrontPage