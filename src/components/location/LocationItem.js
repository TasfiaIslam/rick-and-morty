import React from 'react';

const LocationItem = ({location}) => {
    return (
        <div>
            <div className="flex flex-col border-b-2 border-gray-200 p-2 hover:bg-gray-200">
                <p className="text-xl">{location.name}</p>
                <div className="text-sm">
                    {location.type}
                </div>
            </div>
        </div>
    )
}

export default LocationItem
