import React from 'react';
import { useQuery, gql } from "@apollo/client";
import EpisodeItem from './EpisodeItem';

const EPISODES = gql`
    query GetEpisodes($page: Int = 1){
        episodes(page: $page) {
            info{
            next
            prev
            },
            results {
            id
            name
            air_date
            episode
            }
            }
    }
`

const EpisodeList = ({ page, onNext, onPrev, handleLoading }) => {

    const {isLoading, error, data} = useQuery(EPISODES, {
        variables: { page },
      });

    if(error) return<div>Error loading data</div>
    if(isLoading) return<div>Loading...</div>

    if(data){

        onNext(data.episodes.info.next);
        onPrev(data.episodes.info.prev);
        handleLoading(false);

        return ( 
            <div>
                <div className="my-8">
                    {data.episodes.results.map((episode) => {
                        return <EpisodeItem episode={episode} />
                    })}  
                </div>
            </div>
         );
        }return(
        <div className="my-6 w-9/12 mx-auto text-gray-700 text-lg flex justify-center">
            {handleLoading(true)}
            Wubba Lubba Dub Dub! Loading...
        </div>
        )
}

export default EpisodeList

