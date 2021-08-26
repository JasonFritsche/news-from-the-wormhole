import React from 'react'
import Card from '../components/Card'
import astronautimg from '../../assets/404-astronaut.png'

const NoRouteMatch = () => {
  return (
    <div className="flex overflow-auto flex-col items-center h-screen">
      <Card>
        <div className="flex flex-col flex-1 p-3">
          <div className="flex flex-row flex-1 justify-center">
            <h1 className="font-titillium-web text-2xl md:text-3xl lg:text-4xl font-bold text-center text-purple-900">
              We couldn't find that page...
            </h1>
          </div>
          <div className="flex flex-row flex-1 justify-center">
            <img
              className="object-contain lg:object-scale-down w-full h-96"
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
