import React, { FunctionComponent } from 'react'

interface Props {
  children: React.ReactNode
}

const Card: FunctionComponent<Props> = (props) => {
  return (
    <div className="z-40 p-4 md:w-4/5">
      <div className="flex flex-shrink flex-col rounded-2xl bg-indigo-800/30 shadow-xl backdrop-blur-md backdrop-opacity-50 hover:shadow-md sm:flex-row">
        {props.children}
      </div>
    </div>
  )
}

export default Card
