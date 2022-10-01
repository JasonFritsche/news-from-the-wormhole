import React, { useState, useEffect, FunctionComponent } from 'react'
import { getArticles } from '../articlesApi'
import Article from '../components/Article'
import { IError } from '../models/ApiError'
import { IArticle } from '../models/Article'
import Card from './Card'
import Loader from './Loader'
import { debounce } from 'lodash'
import Header from './Header'
import AppError from './AppError'

interface Props {
  articleType: string
}

const FetchArticles: FunctionComponent<Props> = ({ articleType }) => {
  const [error, setError] = useState<IError | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState<Array<IArticle>>([])
  const [blogPosts, setBlogPosts] = useState<Array<IArticle>>([])
  const [startEntries, setStartEntries] = useState(20)

  useEffect(() => {
    const loadArticles = async () => {
      const newArticles = await getArticles(startEntries, articleType).catch(
        (err) => {
          console.log(err)
          setError(err)
        }
      )

      if (newArticles) {
        articleType === 'articles'
          ? setArticles((prev) => [...new Set([...prev, ...newArticles])])
          : setBlogPosts((prev) => [...new Set([...prev, ...newArticles])])
        setIsLoaded(true)
      }
    }

    loadArticles()
  }, [startEntries, articleType])

  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setStartEntries(startEntries + 20)
    }
  }, 100)

  const content = () => {
    if (articleType === 'articles') {
      return articles.map((article, index) => (
        <Article key={index} article={article} type="Article"></Article>
      ))
    } else if (articleType === 'blogs') {
      return blogPosts.map((blogPost, index) => (
        <Article key={index} article={blogPost} type="Blog Post"></Article>
      ))
    }
  }

  const cardHeaderContents = (articleType: string) => {
    return <Header articleType={articleType} />
  }

  if (error) {
    return <AppError></AppError>
  } else if (!isLoaded) {
    return (
      <div className="flex flex-row justify-center mt-36">
        <Loader />
      </div>
    )
  } else {
    return (
      <div className="flex overflow-auto flex-col items-center h-screen">
        <Card>{cardHeaderContents(articleType)}</Card>
        {content()}
      </div>
    )
  }
}

export default FetchArticles
