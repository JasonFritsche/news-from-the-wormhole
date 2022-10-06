import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-900 opacity-100 items-center justify-center">
      <div className="bg-gray-200 p-3 flex flex-col items-center opacity-70 w-11/12 md:w-1/2 lg:w-1/4 rounded-md">
        <div className="w-full">
          <img className="m-auto" src={nftwlogo} alt="logo image" />
        </div>
        <div className="m-2">
          <h1 className="font-montserrat text-base md:text-xl font-bold text-gray-700">
            Space Flight News and Blog Posts
          </h1>
        </div>
        <div className="hover:bg-gray-300 hover:rounded-md w-full p-2 text-center">
          <a
            className="text-gray-900"
            href="https://www.spaceflightnewsapi.net/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Powered by SpaceFlight News API
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
