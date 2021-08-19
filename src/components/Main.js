import React, { useState } from 'react';
import CharacterList from './CharacterList';
import Pagination from './Pagination';


const Main = () => {

    const [page, setPage] = useState(1);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(2);

    const onNext = (next) => {
        setNext(next)
    }

    const onPrev = (prev) => {
        setPrev(prev)
    }

    const getPage = (value) => {
        setPage(value)
    }

    return (
        <div>
            <CharacterList page={page} onNext={onNext} onPrev={onPrev}/>
            <div className="mb-10">
                <Pagination page={page} prev={prev} next={next}  getPage={getPage}/> 
            </div>
        </div>
    )
}

export default Main
