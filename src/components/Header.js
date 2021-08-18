import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-64 relative flex justify-center items-center">
            <img className="absolute z-0 w-full h-64 object-cover grayscale" src="https://timelinecovers.pro/facebook-cover/download/rick-and-morty-running-away-facebook-cover.jpg"/>
            <p className="absolute z-10 text-white font-semibold text-6xl">Rick And Morty</p>
        </div>
    )
}

export default Header
