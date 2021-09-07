import React, {useState, useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import CharacterCard from './CharacterCard';
import Loader from '../Loader';

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
            <Loader />
        )
    }

    if(data){
        return ( 
            <>  
                <div className={`mt-4 md:mt-10  ${status !== "" || nameQuery !== "" ? "flex space-x-2" : "h-8"}`}>
                    {(status !== "") &&
                        <div className="filter-span">
                            <span>{status}</span>
                            <span onClick={() =>  {setStatus("")}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    }
                     {(nameQuery !== "") &&
                        <div className="filter-span">
                            <span>{nameQuery}</span>
                            <span onClick={handleNameQuery}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 hover:text-red-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    }
                </div>
            
                <div className="mt-10 mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} handleStatus={handleStatus} key={character.id} />
                    })}  
                </div>
            </>
        );
        }
        
}

export default CharacterList
