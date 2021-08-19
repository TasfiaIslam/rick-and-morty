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

const CharacterList = ({ page, onNext, onPrev }) => {

    const {isLoading, error, data} = useQuery(CHARACTERS, {
        variables: { page },
      });
    
    const getNext = () => {
        onNext(data.characters.info.next);
    }

    const getPrev = () => {
        onPrev(data.characters.info.prev)
    }

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>
    if(data){
        return ( 
            <div>
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* {console.log(data.characters.results)} */}
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} />
                    })}
                    
                </div>
                {getNext()}
                {getPrev()}
            </div>
         );
        }return(<div>No data found</div>)
}

export default CharacterList
