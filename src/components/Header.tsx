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
      <div className="z-40 mt-5 p-4 text-center">
        {/* <div className="flex flex-1 flex-row justify-center">
          <img
            className="object-contain lg:object-scale-down w-full h-24"
            src={imgSource}
            alt="astronaut image"
          />
        </div> */}
        <h2 className="font-titillium-web text-lg leading-4 text-white md:text-2xl lg:text-3xl">
          Read the latest space flight {title.toLowerCase()}.
        </h2>
        <hr className="mt-5 inline-block h-1 w-24 rounded-sm bg-white" />
      </div>
    </React.Fragment>
  )
}

export default Header
