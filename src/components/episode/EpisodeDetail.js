import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const EPISODE = gql`
    query GetEpisode($id: ID!){
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters{
                id
                name
                image
            }
        }
    }
`

const EpisodeDetail = () => {

    const {id} = useParams();
    const {loading, error, data} = useQuery(EPISODE, {
        variables: {id: id}
    })

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
            <div className="my-20 flex flex-col">
                <div className="flex flex-row items-center flex-wrap">
                    <div className="flex items-center bg-secondary px-12 py-6 mr-10">
                        <p className="my-2 text-2xl 2xl:text-6xl font-bold text-white">{data.episode.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="main-info-sub-col">
                            <span className="label">Episode</span>
                            <span className="data">{data.episode.episode}</span>
                        </div>
                        <div className="main-info-sub-col">
                            <span className="label">Air Date</span>
                            <span className="data">{data.episode.air_date}</span>
                        </div>
                    </div>
                </div>
                <div className="border border-secondary p-10">
                    <div className="block my-4 pb-2 text-xl 2xl:text-2xl font-bold text-primary border-b border-gray-300">Characters</div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 my-12">
                        {data.episode.characters.map((char) => {
                            return (
                                <Link to={`/characters/${char.id}`}  key={char.id}>
                                <div className="mb-4 flex flex-col items-center justify-center">
                                    <img className="w-16 h-16 rounded-full" src={char.image} alt={char.name}/>
                                    <p className="w-24 md:w-auto text-center mt-2 text-sm 2xl:text-base text-secondary hover:text-secondary-light font-bold truncate">{char.name}</p>
                                </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default EpisodeDetail
