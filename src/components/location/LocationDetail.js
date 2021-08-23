import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";


const LOCATION = gql`
    query GetLocation($id: ID = 1){
        location(id: $id) {
            id
            name
            type
            dimension
            residents{
                id
                name
                image
            }
        }
    }
`

const LocationDetail = () => {

    const {id} = useParams();
    const {isLoading, error, data} = useQuery(LOCATION, {
        variables: {id: id}
    })

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){
        return (
            <div className="my-20 flex flex-col">
                <div className="flex flex-row items-center flex-wrap">
                    <div className="flex items-center bg-secondary px-12 py-6 mr-10">
                        <p className="my-2 text-4xl 2xl:text-6xl font-bold text-white">{data.location.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="main-info-sub-col">
                            <span className="label">Type</span>
                            <span className="data">{data.location.type}</span>
                        </div>
                        <div className="main-info-sub-col">
                            <span className="label">Dimension</span>
                            <span className="data">{data.location.dimension}</span>
                        </div>
                    </div>
                </div>
                <div className="border border-secondary p-10">
                    <div className="block my-4 px-2 pb-4 border-b border-gray-300">
                        <h1 className="text-xl 2xl:text-2xl font-bold text-primary ">Residents</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-10">
                        {data.location.residents.map((res) => {
                            return (
                                <Link to={`/characters/${res.id}`}>
                                <div className="mb-4 flex flex-col items-center justify-center">
                                    <img className="w-16 h-16 rounded-full" src={res.image} />
                                    <p className="mt-2 text-sm 2xl:text-base text-secondary hover:text-secondary-light font-bold truncate">{res.name}</p>
                                </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="my-6 w-5/6 h-screen mx-auto text-gray-700 text-lg flex items-center justify-center">
            <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
        </div>
    )
}

export default LocationDetail
