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
      <div className='z-40 p-4 mt-5 text-center'>
        {/* <div className="flex flex-row flex-1 justify-center">
          <img
            className="object-contain lg:object-scale-down w-full h-24"
            src={imgSource}
            alt="astronaut image"
          />
        </div> */}
          <h2 className="font-titillium-web text-lg text-white md:text-2xl lg:text-3xl leading-4">
            Read the latest space flight {title.toLowerCase()}.
          </h2>
          <hr className='h-1 w-24 bg-white mt-5 inline-block rounded-sm'/>
      </div>
    </React.Fragment>
  )
}

export default Header
