import React, {useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import LocationItem from './LocationItem';

const LOCATIONS = gql`
    query GetLocations($page: Int!, $nameQuery: String){
        locations(page: $page, filter: { name: $nameQuery }) {
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

const LocationList = ({ page, onNext, onPrev, handleLoading, nameQuery }) => {

    const {loading, error, data} = useQuery(LOCATIONS, {
        variables: { page, nameQuery },
      });
    
      useEffect(() => {
        handleLoading(false);
        if(data){
            onNext(data.locations.info.next);
            onPrev(data.locations.info.prev);
        }
     }, [handleLoading, data, onNext,onPrev ]);

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
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 my-12">
                    {data.locations.results.map((location) => {
                        return <LocationItem location={location} key={location.id} />
                    })}  
                </div>
            </div>
         ); 
        }
}

export default LocationList

