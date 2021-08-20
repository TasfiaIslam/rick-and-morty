import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


const EPISODE = gql`
    query GetEpisode($id: ID!){
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters{
            name
            }
        }
    }
`

const EpisodeDetail = () => {

    const {id} = useParams();
    const {isLoading, error, data} = useQuery(EPISODE, {
        variables: {id: id}
    })

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){
        return (
            <div className="my-8 flex flex-row">
                <div className="flex flex-col md:flex-row border-2 border-gray-200 hover:shadow-md">
                    <div className="flex flex-col my-4">
                        <p className="my-2">Name: {data.episode.name}</p>
                        <p className="my-2">Air Date: {data.episode.air_date}</p>
                        <p className="my-2">Episode: {data.episode.episode}</p>
                    </div>
                </div>
                <div>
                    Characters
                    {data.episode.characters.map((char) => {
                        return <p>{char.name}</p>
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

export default EpisodeDetail
