import React from 'react';

const EpisodeItem = ({episode}) => {
    return (
        <div>
            <div className="flex flex-col border-b-2 border-gray-200 p-2 hover:bg-gray-200">
                <p className="text-xl">{episode.name}</p>
                <div className="text-sm">
                    <span>{episode.episode} - </span>
                    <span>{episode.air_date}</span>
                </div>
            </div>
        </div>
    )
}

export default EpisodeItem
