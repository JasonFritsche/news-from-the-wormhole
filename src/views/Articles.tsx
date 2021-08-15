import React, { useState, useEffect } from 'react'
import { IError } from '../models/ApiError'
import { IArticle } from '../models/Article'

const Articles = () => {
  const [error, setError] = useState<IError | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState<Array<IArticle>>([])

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
            setItems(result)
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
    console.log(items)
    return <div>got em</div>
  }
}

export default Articles
