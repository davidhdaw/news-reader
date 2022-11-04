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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
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

    let setStories = (data) => {
        setTopStories(data.results)
        let storyFromStorage = data.results.find(story => story.uri === localStorage.detailStory)
        if (storyFromStorage) {
            setDetailView(true)
            setDetailedStory(storyFromStorage)
        }
        setLoading(false)
        setError(null)
    }

    useEffect(() => {
        setLoading(true)
        setDetailView(false)
        if (frontPage === true) {
            getTopStories().then((data) => {
                setStories(data)
            })
        } else {
            getSectionStories(id).then((data) => {
                setStories(data)
            }).catch((err) => {
                setError(err)
                setLoading(false)
            })
        }
    }, [id])

    return(
        <div className="frontPage">
        {loading && <h2>Loading...</h2>}
        {error && <p>Whoops. We can't seem to find the</p>}
        {detailView && <DetailView detailedStory={detailedStory} setDetailView={setDetailView} /> }
        {!detailView && !loading && <h1 className="sectionTitle">{section}</h1>}
        {error && <p>section</p>}
        {!detailView && !loading && topStories.map((story) => (
            <StoryCard story={story} setDetailView={setDetailView} setDetailedStory={setDetailedStory} />
        ))}
        </div>
    )
}

export default FrontPage