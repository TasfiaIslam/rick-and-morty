import React from 'react';
import { useQuery, gql } from "@apollo/client";
import CharacterCard from './CharacterCard';

const CHARACTERS = gql`
    query GetCharacters{
        characters {
            results {
              id
              name
              status
              species
              type
              gender
              image
              created
            }
        }
    }
`

const CharacterList = () => {
    const {isLoading, error, data} = useQuery(CHARACTERS)

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>
    if(data){
        return ( 
            <div>
                Success
                {console.log(data.characters.results)}
                {data.characters.results.map((character) => {
                    return <CharacterCard character={character} />
                })}
                
            </div>
         );
        }return(<div>No data found</div>)
}

export default CharacterList
