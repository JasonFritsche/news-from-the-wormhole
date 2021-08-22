import React, { FunctionComponent } from 'react'

const Loader: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <div className="animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ec489a"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex z-10 flex-row">
        <h1 className="pt-3 text-3xl text-pink-500 animate-pulse">Loading</h1>
      </div>
    </div>
  )
}

export default Loader
