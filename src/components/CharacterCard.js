import React from 'react'

const CharacterCard = ({character}) => {
    return (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl bg-gray-700">
            <div className="flex-1">
                <img className="w-full md:w-full h-48 md:h-full object-fit md:object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl" src={character.image} />
            </div>
            <div className="flex-1 p-2">
                <p className="mt-4 md:mt-0 text-white font-semibold text-2xl">{character.name}</p>
                <div className="text-white">
                    <span>{character.status} -</span> 
                    <span> {character.species}</span>
                </div>
                <p className="text-white">Gender - {character.gender}</p>
                <div className="text-white mt-4">
                    <p className="text-gray-400">Last known location</p> 
                    <span> {character.location.name}</span>
                </div>
                <div className="text-white mt-4 mb-4 md:mb-0">
                    <p className="text-gray-400">Origin</p> 
                    <span> {character.origin.name}</span>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
