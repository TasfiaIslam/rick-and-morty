import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


const LOCATION = gql`
    query GetLocation($id: ID = 1){
        location(id: $id) {
            id
            name
            type
            dimension
            residents{
                name
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
            <div className="my-8 flex flex-row">
                <div className="flex flex-col md:flex-row border-2 border-gray-200 hover:shadow-md">
                    <div className="flex flex-col my-4">
                        <p className="my-2">Name: {data.location.name}</p>
                        <p className="my-2">Air Date: {data.location.type}</p>
                        <p className="my-2">Episode: {data.location.air_date}</p>
                    </div>
                </div>
                <div>
                    Residents
                    {data.location.residents.map((res) => {
                        return <p>{res.name}</p>
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

export default LocationDetail
