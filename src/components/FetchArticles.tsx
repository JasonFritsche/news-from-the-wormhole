import React, { useState, useEffect, FunctionComponent } from 'react'
import Article from '../components/Article'
import { IError } from '../models/ApiError'
import { IArticle } from '../models/Article'
import Card from './Card'
import Loader from './Loader'

interface Props {
  articleType: string
}

const FetchArticles: FunctionComponent<Props> = ({ articleType }) => {
  const [error, setError] = useState<IError | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState<Array<IArticle>>([])
  const [blogPosts, setBlogPosts] = useState<Array<IArticle>>([])

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/${articleType}?_limit=10`)
      .then((res: Response) => res.json())
      .then(
        (result: IArticle[] | IError) => {
          if ('statusCode' in result) {
            setIsLoaded(true)
            setError(result)
          } else {
            setIsLoaded(true)
            articleType === 'articles'
              ? setArticles(result)
              : setBlogPosts(result)
          }
        },
        (error: IError) => {
          console.log(error)
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [articleType])

  const content = () => {
    if (articleType === 'articles') {
      return articles.map((article) => (
        <Article key={article.id} article={article} type="Article"></Article>
      ))
    } else if (articleType === 'blogs') {
      return blogPosts.map((blogPost) => (
        <Article
          key={blogPost.id}
          article={blogPost}
          type="Blog Post"
        ></Article>
      ))
    }
  }

  const cardHeaderContents = (articleType: string) => {
    const headerTitle = articleType === 'articles' ? 'Articles' : 'Blog Posts'
    return (
      <React.Fragment>
        <div className="flex flex-col flex-1 p-3">
          <div className="flex flex-row flex-1 justify-center">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              {headerTitle}
            </h1>
          </div>
          <div className="flex flex-row flex-1 justify-center">
            <h2>
              Read the latest space flight {headerTitle.toLowerCase()} here
            </h2>
          </div>
        </div>
      </React.Fragment>
    )
  }

  if (error) {
    return <div>Error: an error occurred</div>
  } else if (!isLoaded) {
    return (
      <div className="flex flex-row justify-center mt-36">
        <Loader />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center">
        <Card>{cardHeaderContents(articleType)}</Card>
        {content()}
      </div>
    )
  }
}

export default FetchArticles
