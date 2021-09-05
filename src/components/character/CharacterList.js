import React, {useState, useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import CharacterCard from './CharacterCard';

const CHARACTERS = gql`
    query GetCharacters($page: Int!, $nameQuery: String, $status: String ){
        characters(page: $page, filter: { name: $nameQuery, status: $status }) {
            info{
            next
            prev
            },
            results {
            id
            name
            status
            species
            type
            gender
            image
            created
            origin{
                name
            }
            location{
                name
            }
            
            }
        }
    }
`

const CharacterList = ({ page, onNext, onPrev, handleLoading, nameQuery, handleSearchTerm }) => {

    const [status, setStatus] = useState("");

    const handleStatus = (value) => {
        setStatus(value);
    }

    const handleNameQuery = () => {
        handleSearchTerm("");
    }

    const {loading, error, data} = useQuery(CHARACTERS, {
        variables: { page, nameQuery, status },
      });
 

    useEffect(() => {
       handleLoading(false);
       if(data){
       onNext(data.characters.info.next);
       onPrev(data.characters.info.prev);
       }
    }, [handleLoading, data, onNext,onPrev ]);

    if(error) return<div>Error loading data</div>
    if(loading) {
        return(
            <div className="loading-screen-bg">
                <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
            </div>
        )
    }

    if(data){
        return ( 
            <>  
                <div className={`mt-10  ${status !== "" ? "flex space-x-2" : "h-8"}`}>
                    {(status !== "") &&
                        <div className="px-4 py-2 w-24 rounded-full text-center bg-gray-200 hover:bg-gray-300 text-primary text-sm flex justify-between items-center cursor-pointer">
                            <span>{status}</span>
                            <span onClick={() =>  {setStatus("")}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 hover:text-red-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    }
                     {(nameQuery !== "") &&
                        <div className="px-4 py-2 w-24 rounded-full text-center bg-gray-200 hover:bg-gray-300 text-primary text-sm flex justify-between items-center cursor-pointer">
                            <span>{nameQuery}</span>
                            <span onClick={handleNameQuery}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 hover:text-red-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    }
                </div>
            
                <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} handleStatus={handleStatus} key={character.id} />
                    })}  
                </div>
            </>
        );
        }
        
}

export default CharacterList
