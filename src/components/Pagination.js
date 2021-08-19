import React from 'react'


const Pagination = ({page, prev, next, getPage}) => {

    const handlePrev = () => {
        getPage(page - 1)
      }
    
      const handleNext  = () => {
        getPage(page + 1)
      }


    return (
        <div className="flex justify-center space-x-2">
            {prev ? <div className="">
                <button onClick={handlePrev} className="w-16 h-8 border-2 border-blue-200 hover:bg-yellow-500 rounded">Prev</button>
            </div> : null }
            {next ? <div>
                <button onClick={handleNext} className="w-16 h-8 border-2 border-blue-200 hover:bg-yellow-500 rounded">Next</button>
            </div> : null }
        </div>
    )
}

export default Pagination
