import React, { FunctionComponent } from 'react'

interface Props {
  children: React.ReactNode
}

const Card: FunctionComponent<Props> = (props) => {
  return (
    <div className="z-40 p-4 md:w-4/5">
      <div className="flex flex-col bg-indigo-800/30 backdrop-blur-md backdrop-opacity-50 sm:flex-row flex-shrink rounded-2xl shadow-xl hover:shadow-md">
        {props.children}
      </div>
    </div>
  )
}

export default Card
