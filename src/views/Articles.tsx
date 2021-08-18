import React, { useState, useEffect } from 'react'
import Article from '../components/Article'
import { IError } from '../models/ApiError'
import { IArticle } from '../models/Article'

const Articles = () => {
  const [error, setError] = useState<IError | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState<Array<IArticle>>([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=10')
      .then((res: Response) => res.json())
      .then(
        (result: IArticle[] | IError) => {
          if ('statusCode' in result) {
            setIsLoaded(true)
            setError(result)
          } else {
            setIsLoaded(true)
            setArticles(result)
          }
        },
        (error: IError) => {
          console.log(error)
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: an error occurred</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="flex flex-col items-center">
        {articles.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    )
  }
}

export default Articles
