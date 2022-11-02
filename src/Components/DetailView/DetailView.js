import React from "react";
import './DetailView.css'

const DetailView = ({detailedStory, setDetailView}) => {

    return(
        <div className="detailedView">
            <button className="closeButton" onClick={() => setDetailView(false)}>X</button>
            <h1 className="detailTitle">{detailedStory.title}</h1>
            <p className="byline">{detailedStory.byline}</p>
            <img className="heroImage" src={detailedStory.multimedia[0].url} alt={detailedStory.multimedia[0].caption} />
            <p className="subHead">{detailedStory.abstract}</p>
            <p className="storyLink">Read more at <a href={detailedStory.url}>The New York Times</a></p>
        </div>
    )
}

export default DetailView