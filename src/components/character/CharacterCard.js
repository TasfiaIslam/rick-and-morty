import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const CharacterCard = ({character, handleStatus}) => {

    const [showAnimation, setShowAnimation] = useState(false);

    const getStatus = (e) => {
        e.preventDefault();
        handleStatus(character.status);
    }
    useEffect(() => {
        const targets = document.querySelectorAll(".test");
        console.log(targets)
    
        const callback = function (entries) {
            entries.forEach((entry) => {
              console.log(entry);
          
              if (entry.isIntersecting) {
                entry.target.classList.add("character-card-div");
              } else {
                entry.target.classList.remove("character-card-div");
              }
            });
          };
     
        // Set up a new observer
        const observer = new IntersectionObserver(callback);
      
        targets.forEach(function (target) {
        target.classList.add("character-card-div");
        observer.observe(target);
        });
    }, [])


    return (
            <div className="test lg:h-80 relative flex flex-col bg-primary shadow-md border border-gray-200 hover:bg-primary-light p-4">          
                <div class="flex flex-row">
                <div className="w-1/3"  onMouseEnter={() => setShowAnimation(true)} onAnimationEnd={() => setShowAnimation(false)}>
                    <img className={`avatar animate-animated !animate-slow ${showAnimation  ? "animate-tada" : "" }`} 
                    src={character.image} alt={character.name}  
                   />
                </div>
                <div className="w-2/3">
                    <Link to={`/characters/${character.id}`}>
                    <p className="mt-4 md:mt-0 text-gray-100 font-semibold text-xl 2xl:text-2xl truncate hover:text-complimentary">{character.name}</p>
                    </Link>
                    <p class="w-32 border-b-2 border-white my-2"></p>
                    <div className="text-gray-100 flex space-x-1 font-semibold text-xs 2xl:text-sm">
                        <div className="block">
                            <span className={`w-2 h-2 inline-block mr-1 rounded-full my-auto  
                                    ${character.status === "Alive" ? "bg-secondary" : 
                                    character.status === "Dead" ? "bg-red-400" : "bg-gray-400"}`}>
                            </span>
                            <span className="hover:text-complimentary cursor-pointer" onClick={getStatus}>{character.status} |</span>
                            <span className="hover:text-complimentary cursor-pointer">{character.species} |</span>
                            <span className="hover:text-complimentary cursor-pointer">{character.gender} </span>
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
    )
}

export default CharacterCard
