import React, {useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import EpisodeItem from './EpisodeItem';
import Loader from '../Loader';

const EPISODES = gql`
    query GetEpisodes($page: Int!, $nameQuery: String){
        episodes(page: $page, filter: { name: $nameQuery }) {
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

const EpisodeList = ({ page, onNext, onPrev, handleLoading, nameQuery, handleSearchTerm}) => {

    const handleNameQuery = () => {
        handleSearchTerm("");
    }

    const {loading, error, data} = useQuery(EPISODES, {
        variables: { page, nameQuery },
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
            <Loader />
        )
    }

    if(data){
        return ( 
            <div>
                <div className={`mt-10  ${nameQuery !== "" ? "" : "h-8"}`}>
                    {(nameQuery !== "") &&
                            <div className="px-4 py-2 w-24 rounded-full text-center bg-gray-200 hover:bg-gray-300 text-primary text-sm flex justify-between items-center cursor-pointer">
                                <span>{nameQuery}</span>
                                <span onClick={handleNameQuery}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 hover:text-red-900" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        }
                </div>
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

