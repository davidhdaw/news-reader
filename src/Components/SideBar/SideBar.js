import React from "react";
import './SideBar.css'
import { Link } from "react-router-dom";

const SideBar = () => {

    return(
        <div className="sideNav">
            <Link className="homeLink" to={`/`}> Home </Link>
            <br />
            <br />
            <Link className="sectionLink" to={`/arts`}> Arts </Link>
            <br />
            <Link className="sectionLink" to={`/automobiles`}> Automobiles </Link>
            <br />
            <Link className="sectionLink" to={`/books`}> Books </Link>
            <br />
            <Link className="sectionLink" to={`/business`}> Business </Link>
            <br />
            <Link className="sectionLink" to={`/fashion`}> Fashion </Link>
            <br />
            <Link className="sectionLink" to={`/food`}> Food </Link>
            <br />
            <Link className="sectionLink" to={`/health`}> Health </Link>
            <br />
            <Link className="sectionLink" to={`/insider`}> Insider </Link>
            <br />
            <Link className="sectionLink" to={`/magazine`}> Magazine </Link>
            <br />
            <Link className="sectionLink" to={`/movies`}> Movies </Link>
            <br />
            <Link className="sectionLink" to={`/opinion`}> Opinion </Link>
            <br />
            <Link className="sectionLink" to={`/politics`}> Politics </Link>
            <br />
            <Link className="sectionLink" to={`/science`}> Science </Link>
            <br />
            <Link className="sectionLink" to={`/sports`}> Sports </Link>
            <br />
            <Link className="sectionLink" to={`/sundayreview`}> Sunday Review </Link>
            <br />
            <Link className="sectionLink" to={`/technology`}> Technology </Link>
            <br />
            <Link className="sectionLink" to={`/theater`}> Theater </Link>
            <br />
            <Link className="sectionLink" to={`/travel`}> Travel </Link>
            <br />
            <Link className="sectionLink" to={`/us`}> U.S. </Link>
            <br />
            <Link className="sectionLink" to={`/world`}> World </Link>
        </div>
    )
}

export default SideBar