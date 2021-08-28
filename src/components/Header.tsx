import React, { FunctionComponent } from 'react'

interface Props {
  title: string
}

const Header: FunctionComponent<Props> = ({ title }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col flex-1 p-3">
        <div className="flex flex-row flex-1 justify-center">
          <h1 className="font-titillium-web text-2xl md:text-4xl lg:text-7xl font-bold text-center text-purple-900">
            {title}
          </h1>
        </div>
        <div className="flex flex-row flex-1 justify-center">
          <h2 className="font-titillium-web text-lg md:text-2xl lg:text-3xl leading-4 text-gray-700">
            Read the latest space flight {title.toLowerCase()}
          </h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
