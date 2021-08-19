import React from 'react';
import { useQuery, gql } from "@apollo/client";
import LocationItem from './LocationItem';

const LOCATIONS = gql`
    query GetLocations($page: Int = 1){
        locations(page: $page) {
            info{
            next
            prev
            },
            results {
            id
            name
            type
            dimension  
            }
        }
    }
`

const LocationList = ({ page, onNext, onPrev, handleLoading }) => {

    const {isLoading, error, data} = useQuery(LOCATIONS, {
        variables: { page },
      });

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){

        onNext(data.locations.info.next);
        onPrev(data.locations.info.prev);
        handleLoading(false);

        return ( 
            <div>
                <div className="my-8">
                    {data.locations.results.map((location) => {
                        return <LocationItem location={location} />
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

export default LocationList

