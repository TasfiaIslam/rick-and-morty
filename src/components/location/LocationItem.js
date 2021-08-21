import React from 'react';
import { Link } from "react-router-dom";

const LocationItem = ({location}) => {
    return (
        <div>
            <Link to={`/locations/${location.id}`}>
                <div className="flex flex-col p-4 rounded-md border border-gray-200 hover:bg-gray-200 hover:border-gray-700">
                    <p className="text-xl 2xl:text-2xl font-medium truncate mb-3">{location.name}</p>
                    <div className="text-base 2xl:text-lg text-secondary font-bold truncate">
                        {location.type}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LocationItem
