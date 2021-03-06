import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <div className="relative flex justify-center items-center">
                <img className="hero-image" src="/images/rnm.jpg" alt="hero"/>
                <div className="hero-text">
                    <h1 className="text-4xl md:text-6xl 2xl:text-6xl font-bold text-white">Rick And Morty</h1>
                    <p className="mt-2 text-sm md:text-lg 2xl:text-xl font-bold text-white">Sometimes science is more art than science.</p>
                </div>
            </div>
            <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-center space-y-16 md:space-y-0 md:space-x-12 items-center py-20">
                <div className="home-item">
                    <img className="w-full h-full object-fit" src="/images/characters.jpg" alt="characters"/>
                    <div className="bg-cover">
                        <Link to="/characters">
                            <p className="">Characters</p>
                        </Link>
                    </div>
                </div>
                <div className="home-item">
                    <img className="w-full h-full object-fit" src="/images/location.jpg" alt="locations"/>
                    <div className="bg-cover">
                        <Link to="/locations">
                        <p className="">Locations</p>
                        </Link>
                    </div>
                </div>
                <div className="home-item">
                    <img className="w-full h-full object-fit" src="/images/episode.jpg" alt="episodes"/>
                    <div className="bg-cover">
                        <Link to="/episodes">
                            <p className="">Episodes</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Home
