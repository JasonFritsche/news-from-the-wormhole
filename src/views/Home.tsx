import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gray-900 opacity-100">
      <div className="flex w-11/12 flex-col items-center rounded-md bg-gray-200 p-3 opacity-70 md:w-1/2 lg:w-1/4">
        <div className="w-full">
          <img className="m-auto" src={nftwlogo} alt="logo image" />
        </div>
        <div className="m-2">
          <h1 className="font-montserrat text-base font-bold text-gray-700 hover:cursor-default md:text-xl">
            Space Flight News and Blog Posts
          </h1>
        </div>
        <div className="w-full p-2 text-center hover:rounded-md hover:bg-gray-300">
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
