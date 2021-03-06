import React from 'react';
import { Link } from "react-router-dom";

const EpisodeItem = ({episode}) => {
    return (
        <div>
            <Link to={`/episodes/${episode.id}`}>
            <div className="flex flex-col p-3 md:p-4 border border-gray-200 hover:bg-gray-200 hover:border-gray-700">
                <p className="text-lg md:text-xl font-medium truncate mb-2 md:mb-3">{episode.name}</p>
                <div className="flex flex-row items-center justify-between font-bold truncate">
                    <span className="text-secondary text-base 2xl:text-lg">{episode.episode}</span>
                    <span className="text-gray-400 text-sm 2xl:text-base hidden md:block">{episode.air_date}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default EpisodeItem
