import React, {useEffect, useState} from "react";
import { getTopStories } from "../../apiCalls";
import StoryCard from "../StoryCard/StoryCard";
import DetailView from '../DetailView/DetailView'
import './FrontPage.css'

const FrontPage = () => {
    const [topStories, setTopStories] = useState([])
    const [detailView, setDetailView] = useState(false)
    const [detailedStory, setDetailedStory] = useState({})

    useEffect(() => {
        getTopStories().then((data) => {
            setTopStories(data.results)
            console.log(topStories)
        })
    }, [])

    return(
        <div className="frontPage">
        {detailView && <DetailView detailedStory={detailedStory} /> }
        {!detailView && topStories.map((story) => (
            <StoryCard story={story} setDetailView={setDetailView} setDetailedStory={setDetailedStory} />
        ))}
        </div>
    )
}

export default FrontPage