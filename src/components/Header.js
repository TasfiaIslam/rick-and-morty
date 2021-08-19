import { useState } from "react";
import {Link} from 'react-router-dom';

const Header = () => {

    const [isHidden, setHidden] = useState("true");

    const handleMenu = (e) => {
        e.preventDefault();
        setHidden(!isHidden);
    }

    return ( 
        <header class="md:flex md:items-center md:justify-between py-4 pb-0 shadow-md md:pb-4 bg-green-400">
            <div className="w-4/5 md:w-9/12 mx-auto md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    
                    <div class="flex items-center justify-between mb-4 md:mb-0">
                        <h1 class="leading-none text-2xl text-grey-darkest">
                            <Link to="/" class="no-underline text-green-400 font-bold hover:text-black">
                                <img className="w-14 h-14 md:w-16 md:h-16 rounded-full" src="/images/logo.jpeg" />
                            </Link>
                        </h1>
                    </div>

                    <nav className="md:hidden mb-4" onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </nav>
                </div>
                <nav className={`md:block ${isHidden ? "hidden" : "block"} `}>
                    <ul class="list-reset md:flex md:items-center">
                        <li class="md:ml-4 md:mx-8">
                            <Link to="/" class="block font-semibold py-2 text-lg text-white hover:text-black md:border-none md:p-0">
                                Characters
                            </Link>
                        </li>
                        <li class="md:ml-4 md:mx-8">
                            <Link to="/locations" class="block font-semibold py-2 text-lg text-white hover:text-black md:border-none md:p-0">
                                Locations
                            </Link>
                        </li>
                        <li class="md:ml-4 md:ml-4">
                            <Link to="/episodes" class="block font-semibold py-2 text-lg text-white hover:text-black md:border-none md:p-0">
                                Episodes
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
        </header>
    );
}
 
export default Header;