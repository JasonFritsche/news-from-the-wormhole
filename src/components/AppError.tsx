import React from 'react'

const AppError = () => {
  return (
    <React.Fragment>
      <div className="z-40 mt-5 p-4 text-center">
        <h2 className="font-titillium-web text-lg leading-4 text-white md:text-2xl lg:text-3xl">
          An error occurred, please try again later...
        </h2>
        <hr className="mt-5 inline-block h-1 w-24 rounded-sm bg-white" />
      </div>
    </React.Fragment>
  )
}

export default AppError
