import React from 'react';

const Pagination = ({page, prev, next, getPage, loading}) => {

    const handlePrev = () => {
        getPage(page - 1)
      }
    
      const handleNext  = () => {
        getPage(page + 1)
      }

    if(!loading){
    return (
        
        <div className="flex justify-center space-x-2">
            
            {prev ? <div className="">
                <button onClick={handlePrev} className="btn-pagination">Prev</button>
            </div> : null }
            {next ? <div>
                <button onClick={handleNext} className="btn-pagination">Next</button>
            </div> : null } 
            
        </div>
    )}
    else return null
}

export default Pagination
