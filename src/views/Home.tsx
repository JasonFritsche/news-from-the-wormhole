import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-200 opacity-50">
      <div className="flex flex-row justify-around mt-4 mb-8">
        <div>
          <h1>Most Recent Articles</h1>
        </div>
        <div>
          <h1>Most Recent Blog Posts</h1>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <img src={nftwlogo} alt="logo image" />
      </div>
    </div>
  )
}

export default Home
