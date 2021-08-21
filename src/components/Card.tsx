import React, { FunctionComponent } from 'react'

interface Props {
  children: React.ReactNode
}

const Card: FunctionComponent<Props> = (props) => {
  return (
    <div className="z-50 p-4 md:w-4/5 opacity-90 hover:opacity-100">
      <div className="flex flex-col sm:flex-row flex-shrink bg-gray-300 rounded-2xl shadow-xl hover:shadow-md">
        {props.children}
      </div>
    </div>
  )
}

export default Card
