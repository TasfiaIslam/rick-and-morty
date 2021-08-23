import React from 'react';
import { useQuery, gql } from "@apollo/client";
import EpisodeItem from './EpisodeItem';

const EPISODES = gql`
    query GetEpisodes($page: Int!){
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
                <div className="grid grid-cols-4 gap-6 my-12">
                    {data.episodes.results.map((episode) => {
                        return <EpisodeItem episode={episode} />
                    })}  
                </div>
            </div>
         );
        }return(
            <div className="my-6 w-5/6 h-screen mx-auto text-gray-700 text-lg flex items-center justify-center">
                {handleLoading(true)}
                <p className="text-secondary font-bold text-xl 2xl:text-2xl">Wubba Lubba Dub Dub! Loading...</p>
            </div>
        )
}

export default EpisodeList

