import React, {useEffect} from 'react';
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

    const {loading, error, data} = useQuery(EPISODES, {
        variables: { page },
      });

      useEffect(() => {
        handleLoading(false);
        if(data){
            onNext(data.episodes.info.next);
            onPrev(data.episodes.info.prev);
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
                    {data.episodes.results.map((episode) => {
                        return <EpisodeItem episode={episode} key={episode.id} />
                    })}  
                </div>
            </div>
         );
        }
}

export default EpisodeList

