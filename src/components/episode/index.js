import React, { useState, useEffect } from 'react';
import EpisodeList from './EpisodeList';
import Pagination from '../Pagination';


const Episode = () => {

    const [page, setPage] = useState(1);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(2);
    const [loading, setLoading] = useState(true);

    const onNext = (next) => {
        setNext(next);
    }

    const onPrev = (prev) => {
        setPrev(prev);
    }

    const getPage = (value) => {
        setPage(value);
    }

    const handleLoading = (value) => {
        setLoading(value);
    }

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [page]);

    return (
        <div>
            <EpisodeList page={page} onNext={onNext} onPrev={onPrev} handleLoading={handleLoading}/>
            <div className="mb-10">
                <Pagination page={page} prev={prev} next={next}  getPage={getPage} loading={loading}/> 
            </div>
        </div>
    )
}

export default Episode
