import React from 'react'

export default function Loader() {
    return (
        <div className="loading-screen-bg">
            <div class=" flex justify-center items-center">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        </div>
    )
}
