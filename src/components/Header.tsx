import React, { FunctionComponent } from 'react'
import blogAstronautImg from '../../assets/blog-astronaut.png'
import articleAstronautImg from '../../assets/article-astronaut.png'

interface Props {
  articleType: string
}

const Header: FunctionComponent<Props> = ({ articleType }) => {
  const title = articleType === 'articles' ? 'Articles' : 'Blog Posts'
  const imgSource =
    articleType === 'articles' ? articleAstronautImg : blogAstronautImg
  return (
    <React.Fragment>
      <div className="flex flex-col flex-1 p-3">
        <div className="flex flex-row flex-1 justify-center">
          <img
            className="object-contain lg:object-scale-down w-full h-96"
            src={imgSource}
            alt="astronaut image"
          />
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
