import React, {useEffect, useState} from "react";
import { getTopStories, getSectionStories } from "../../apiCalls";
import { useParams } from "react-router-dom";
import StoryCard from "../StoryCard/StoryCard";
import DetailView from '../DetailView/DetailView'
import './FrontPage.css'

const FrontPage = ({frontPage}) => {
    let {id} = useParams();
    let section = ''
    const [topStories, setTopStories] = useState([])
    const [detailView, setDetailView] = useState(false)
    const [detailedStory, setDetailedStory] = useState({})

    if (frontPage === true) {
        section = 'Top Stories'
    } else if (id === 'sundayreview') {
        section = 'Sunday Review'
    } else if (id === 'us') {
        section = 'U.S. News'
    } else {
        let sectionNameArray = id.split('')
        sectionNameArray[0] = sectionNameArray[0].toUpperCase()
        section = sectionNameArray.join('')
    }

    useEffect(() => {
        setDetailView(false)
        if (frontPage === true) {
            getTopStories().then((data) => {

                setTopStories(data.results)
                console.log(topStories)
            })
        } else {
            getSectionStories(id).then((data) => {
                setTopStories(data.results)
                console.log(topStories)
            })
        }
    }, [id])

    return(
        <div className="frontPage">
        {detailView && <DetailView detailedStory={detailedStory} setDetailView={setDetailView} /> }
        {!detailView && <h1 className="sectionTitle">{section}</h1>}
        {!detailView && topStories.map((story) => (
            <StoryCard story={story} setDetailView={setDetailView} setDetailedStory={setDetailedStory} />
        ))}
        </div>
    )
}

export default FrontPage