import React from 'react';
import { useQuery, gql } from "@apollo/client";
import CharacterCard from './CharacterCard';

const CHARACTERS = gql`
    query GetCharacters($page: Int!){
        characters(page: $page) {
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

const CharacterList = ({ page, onNext, onPrev, handleLoading }) => {

    const {isLoading, error, data} = useQuery(CHARACTERS, {
        variables: { page },
      });

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){

        onNext(data.characters.info.next);
        onPrev(data.characters.info.prev);
        handleLoading(false);

        return ( 
            <>
                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} />
                    })}  
                </div>
            </>
        );
        }return(
            <div className="my-6 w-5/6 h-screen mx-auto text-gray-700 text-lg flex items-center justify-center">
                {handleLoading(true)}
                <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
            </div>
        )
}

export default CharacterList
