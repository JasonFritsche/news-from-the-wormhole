import React, { FunctionComponent } from 'react'

const Loader: FunctionComponent = () => {
  const circleCommonClasses = 'h-9 w-9 rounded-full'

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} mr-3 animate-bounce bg-red-300`}
      ></div>
      <div
        className={`${circleCommonClasses} mr-3 animate-bounce200 bg-yellow-100`}
      ></div>
      <div
        className={`${circleCommonClasses} animate-bounce400 bg-green-200`}
      ></div>
    </div>
  )
}

export default Loader
