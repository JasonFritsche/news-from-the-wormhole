import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-900 opacity-100">
      <div className="flex flex-row justify-center pt-32 opacity-80">
        <img src={nftwlogo} alt="logo image" className='w-96 bg-gray-100 rounded-lg p-3'/>
      </div>
      <div className="flex flex-row justify-center text-gray-900 opacity-100">
        <h1 className='bg-gray-100 m-2 p-3 rounded-md opacity-80'>Space Flight News and Blog Posts</h1>
      </div>
      <div className="flex flex-row justify-center text-gray-900 ">
        <p className='bg-gray-100 m-0 pl-3 pr-0 py-3 rounded-md  hover:bg-green-500 hover:text-gray-100 opacity-80'>Powered by &nbsp;
          <a className='text-gray-900 bg-gray-100 m-0 py-3 pl-0 pr-3 rounded-md  hover:bg-green-500 hover:text-gray-100' href='https://www.spaceflightnewsapi.net/' target="_blank" rel="noreferrer noopener">SpaceFlight News API
          </a>
        </p>
      </div>
    </div>
  )
}

export default Home
