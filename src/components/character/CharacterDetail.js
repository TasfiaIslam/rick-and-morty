import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


const CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id: $id) {
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
            episode{
                name
            }
        }
    }
`

const CharacterDetail = () => {

    const {id} = useParams();
    const {isLoading, error, data} = useQuery(CHARACTER, {
        variables: {id: id}
    })

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){
        return (
            <div className="my-8 flex flex-row">
                <div className="flex flex-col md:flex-row border-2 border-gray-200 hover:shadow-md">
                    <div>
                        <img className="w-full h-64 object-fit mb-2" src={data.character.image}/>
                    </div>
                    <div className="flex flex-col my-4">
                        <p className="my-2">Name: {data.character.name}</p>
                        <p className="my-2">Status: {data.character.status}</p>
                        <p className="my-2">Species: {data.character.species}</p>
                        <p className="my-2">Gender: {data.character.gender}</p>
                        <p className="my-2">Type: {data.character.type}</p>
                        <p className="my-2">Location: {data.character.location.name}</p>
                    </div>
                </div>
                <div>
                    Episodes
                    {data.character.episode.map((epi) => {
                        return <p>{epi.name}</p>
                    })}
                </div>
            </div>
        )
    }
    return(
        <div className="my-6 w-9/12 mx-auto text-gray-700 text-lg flex justify-center">
            Wubba Lubba Dub Dub! Loading...
        </div>
    )
}

export default CharacterDetail
