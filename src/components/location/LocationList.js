import React from 'react';
import { useQuery, gql } from "@apollo/client";
import LocationItem from './LocationItem';

const LOCATIONS = gql`
    query GetLocations($page: Int!){
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 my-12">
                    {data.locations.results.map((location) => {
                        return <LocationItem location={location} key={location.id} />
                    })}  
                </div>
            </div>
         ); 
        }return(
            <div className="loading-screen-bg">
                {handleLoading(true)}
                <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
            </div>
        )
}

export default LocationList

