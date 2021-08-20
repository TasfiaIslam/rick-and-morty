import React from 'react';
import { Link } from "react-router-dom";

const EpisodeItem = ({episode}) => {
    return (
        <div>
            <Link to={`/episodes/${episode.id}`}>
            <div className="flex flex-col border-b-2 border-gray-200 p-2 hover:bg-gray-200">
                <p className="text-xl">{episode.name}</p>
                <div className="text-sm">
                    <span>{episode.episode} - </span>
                    <span>{episode.air_date}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default EpisodeItem
