import { useState } from "react";
import {Link} from 'react-router-dom';

const Header = () => {

    const [isHidden, setHidden] = useState("true");

    const handleMenu = (e) => {

        e.preventDefault();
        setHidden(!isHidden);
    }

    return ( 
        <header className="nav-container">
            <div className="nav-outer-wrapper">
                <h1 className="leading-none text-2xl text-grey-darkest">
                    <Link to="/" className="no-underline text-white font-bold hover:text-secondary">
                        <img className="w-12 h-12 md:w-16 md:h-16 rounded-full animate-spin-slow" src="/images/logo.jpeg" alt="logo" />
                    </Link>
                </h1>

                <nav className="md:hidden absolute right-4" onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </nav>
                <nav className={`md:block ${isHidden ? "hidden" : "block"} `}>
                    <ul className={`list-reset md:flex md:items-center font-press-start ${isHidden ? "" : "nav-sm-screen"}`}>
                        <li className="md:ml-4 md:mx-8">
                            <Link to="/characters" className="nav-link">
                                Characters
                            </Link>
                        </li>
                        <li className="md:ml-4 md:mx-8">
                            <Link to="/locations" className="nav-link">
                                Locations
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link to="/episodes" className="nav-link">
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