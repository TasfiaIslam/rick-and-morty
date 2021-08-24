import React, {useEffect} from 'react';
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

    const {loading, error, data} = useQuery(CHARACTERS, {
        variables: { page },
      });

    useEffect(() => {
       handleLoading(false);
    }, [handleLoading]);

    if(error) return<div>Error loading data</div>
    if(loading) {
        return(
            <div className="loading-screen-bg">
                <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
            </div>
        )
    }

    if(data){

        onNext(data.characters.info.next);
        onPrev(data.characters.info.prev);

        return ( 
            <>
                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.characters.results.map((character) => {
                        return <CharacterCard character={character} key={character.id} />
                    })}  
                </div>
            </>
        );
        }
        
}

export default CharacterList
