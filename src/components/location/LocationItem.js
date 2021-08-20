import React from 'react';
import { Link } from "react-router-dom";

const LocationItem = ({location}) => {
    return (
        <div>
            <Link to={`/locations/${location.id}`}>
                <div className="flex flex-col border-b-2 border-gray-200 p-2 hover:bg-gray-200">
                    <p className="text-xl">{location.name}</p>
                    <div className="text-sm">
                        {location.type}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LocationItem
