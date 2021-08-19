import React, { useState } from 'react';
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
            <div>
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} />
                    })}  
                </div>
            </div>
         );
        }return(
        <div className="my-6 w-9/12 mx-auto text-gray-700 text-lg flex justify-center">
            {handleLoading(true)}
            Loading...
        </div>
        )
}

export default CharacterList
