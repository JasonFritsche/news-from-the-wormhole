import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-200 opacity-50">
      <div className="flex flex-row justify-center pt-32">
        <img src={nftwlogo} alt="logo image" />
      </div>
    </div>
  )
}

export default Home
