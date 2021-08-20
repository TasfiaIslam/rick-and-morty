import React from 'react';
import { Link } from "react-router-dom";

const CharacterCard = ({character}) => {
    return (
        <Link to={`/characters/${character.id}`}>
            <div className="flex flex-col md:flex-row  shadow-md border border-gray-200 rounded-xl hover:bg-gray-100">
                <div className="flex-1">
                    <img className="w-full md:w-full h-48 md:h-full object-fit md:object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl" src={character.image} />
                </div>
                <div className="flex-1 p-2">
                    <p className="mt-4 md:mt-0 text-gray-700 font-semibold text-2xl">{character.name}</p>
                    <div className="text-gray-700 flex space-x-1">
                        <div className={`w-2 h-2 rounded-full my-auto  
                                ${character.status === "Alive" ? "bg-green-600" : 
                                character.status === "Dead" ? "bg-red-400" : "bg-gray-400"}`}>
                        </div>
                        <div>
                            <span>{character.status} -</span> 
                            <span> {character.species}</span>
                        </div> 
                    </div>
                    <p className="text-gray-700">Gender - {character.gender}</p>
                    <div className="text-gray-700 mt-4">
                        <p className="text-gray-400">Last known location</p> 
                        <span> {character.location.name}</span>
                    </div>
                    <div className="text-gray-700 mt-4 mb-4 md:mb-0">
                        <p className="text-gray-400">Origin</p> 
                        <span> {character.origin.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CharacterCard
