import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Loader from '../Loader';

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
                id
                name
            }
        }
    }
`

const CharacterDetail = () => {

    const {id} = useParams();
    const {loading, error, data} = useQuery(CHARACTER, {
        variables: {id: id}
    })

    if(error) return<div>Error loading data</div>
    if(loading) {
        return(
            <Loader />
        )
    }

    if(data){
        return (
            <div className="my-20 flex flex-col">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
                        <img className="w-48 h-48 rounded-full object-fit" src={data.character.image} alt={data.character.name}/>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col">
                        <h1 className="my-1 text-3xl 2xl:text-4xl font-bold text-primary">{data.character.name}</h1>
                        <div className="flex flex-row">
                            <div className="main-info-sub-col">
                                <span className="label">Status</span>
                                <span className="data">{data.character.status}</span>
                            </div>
                            <div className="main-info-sub-col">
                                <span className="label">Species</span>
                                <span className="data">
                                    {data.character.speices ? 
                                        data.character.speices :
                                        "Unknown"
                                    }
                                </span>
                            </div>
                            
                            <div className="main-info-sub-col">
                                <span className="label">Gender</span>
                                <span className="data">{data.character.gender}</span>
                            </div>
                        </div>
 
                        <div className="extra-info-col">
                            <span className="info-label">Type</span>
                            <span className="info-value">
                                {data.character.type ? 
                                    data.character.type :
                                    "Unknown"
                                }
                            </span>
                        </div>
                        <div className="extra-info-col">
                            <span className="info-label">Origin</span>
                            <span className="info-value">
                                {data.character.origin.name ?
                                    data.character.origin.name :
                                    "Unknown"
                                }
                            </span>
                        </div>
                        <div className="extra-info-col">
                            <span className="info-label">Location</span>
                            <span className="info-value">
                                {data.character.location.name ?
                                    data.character.location.name :
                                    "Unknown"
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border border-secondary rounded-lg mt-4 md:mt-20 p-10">
                    <div className="block my-4 pb-2 text-xl 2xl:text-2xl font-bold text-primary border-b border-gray-300">Episodes</div>
                    {data.character.episode.map((epi) => {
                        return (
                            <Link to={`/episodes/${epi.id}`}>
                                <h1 className="text-base 2xl:text-lg font-semibold text-secondary hover:text-secondary-light">{epi.name}</h1>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CharacterDetail
