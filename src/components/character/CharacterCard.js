import React from 'react';
import { Link } from "react-router-dom";

const CharacterCard = ({character}) => {
    return (
        <Link to={`/characters/${character.id}`}>
            <div className="relative flex flex-col bg-primary shadow-md border border-gray-200 hover:bg-primary-light p-4">
                
                <div class="flex flex-row">
                <div className="w-1/3">
                    <img className="absolute -top-4 -left-4 w-20 md:w-24 h-20 md:h-24 rounded-full object-fit md:object-cover" src={character.image} alt={character.name}/>
                </div>
                <div className="w-2/3">
                    <p className="mt-4 md:mt-0 text-gray-100 font-semibold text-xl 2xl:text-2xl truncate">{character.name}</p>
                    <p class="w-32 border-b-2 border-white my-2"></p>
                    <div className="text-gray-100 flex space-x-1 font-semibold text-xs 2xl:text-sm">
                        <div className="block">
                            <span className={`w-2 h-2 inline-block mr-1 rounded-full my-auto  
                                    ${character.status === "Alive" ? "bg-secondary" : 
                                    character.status === "Dead" ? "bg-red-400" : "bg-gray-400"}`}>
                            </span>
                            <span>{character.status} |</span>
                            <span> {character.species} |</span>
                            <span> {character.gender}</span>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="flex-1 p-2">
                    
                    <div className="my-3">
                        <p className="text-sub-title">Last known location</p> 
                        <span className="text-sub-value"> {character.location.name}</span>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <p className="text-sub-title">Origin</p> 
                        <span className="text-sub-value"> {character.origin.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CharacterCard
