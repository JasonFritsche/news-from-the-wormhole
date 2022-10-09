import React from 'react'
import Card from '../components/Card'
import astronautimg from '../../assets/404-astronaut.png'

const NoRouteMatch = () => {
  return (
    <div className="h-screen·flex-col·items-center·overflow-auto flex">
      <Card>
        <div className="flex flex-1 flex-col p-3">
          <div className="flex flex-1 flex-row justify-center">
            <h1 className="text-center font-titillium-web text-2xl font-bold text-purple-900 md:text-3xl lg:text-4xl">
              We couldn&apos;t find that page...
            </h1>
          </div>
          <div className="flex flex-1 flex-row justify-center">
            <img
              className="h-96 w-full object-contain lg:object-scale-down"
              src={astronautimg}
              alt="logo image"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default NoRouteMatch
