import { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const Header = ({nameQuery, handleSearchTerm}) => {

    const [isHidden, setHidden] = useState("true");
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();
    const logoRef = useRef();

    const handleMenu = (e) => {
        e.preventDefault();
        setHidden(!isHidden);
    }

    const getSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value.toLocaleLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchTerm(searchTerm);
        inputRef.current.value = "";
    }

    useEffect( () => {
        logoRef.current.classList.add("animate-spin-slow")
    }, []);


    return ( 
        <header className="nav-container">
            <div className="nav-outer-wrapper">
                <div className="flex items-center space-x-4">
                    <h1 className="leading-none text-2xl text-grey-darkest">
                        <Link to="/" className="no-underline text-white font-bold hover:text-secondary">
                            <img className="w-12 h-12 md:w-16 md:h-12 rounded-full" src="/images/logo.jpeg" alt="logo" ref={logoRef}/>
                        </Link>
                    </h1>
                    
                    <form onSubmit={handleSubmit} className="w-36 md:w-full flex justify-between bg-white  rounded-md">
                        <input 
                            className="rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" 
                            onChange={getSearchTerm}
                            value={nameQuery} ref={inputRef}
                        />
                        <button onClick={handleSubmit} className="items-center p-2" type="submit" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor"> 
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </form>
                    
                </div>

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