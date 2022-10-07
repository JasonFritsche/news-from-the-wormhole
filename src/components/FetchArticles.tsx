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
import Apierror from './Apierror'

interface Props {
  articleType: string
}

const FetchArticles: FunctionComponent<Props> = ({ articleType }) => {
  const [error, setError] = useState<IError | null>(null)
  const [apiError, setApiError] = useState<IError>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState<Array<IArticle>>([])
  const [blogPosts, setBlogPosts] = useState<Array<IArticle>>([])
  const [startEntries, setStartEntries] = useState(20)

  useEffect(() => {
    const loadArticles = async () => {
      const data = await getArticles(startEntries, articleType)
      .catch(
        (err) => {
          console.log(err)
          setError(err)
        }
      )
      console.log(data);


      if (data.success) {
        articleType === 'articles'
          ? setArticles((prev) => [...new Set([...prev, ...data.articles])])
          : setBlogPosts((prev) => [...new Set([...prev, ...data.articles])])
        setIsLoaded(true)
      }
      if(data.success == false){
        setApiError(data.error)
        // console.log(apiError);

      }
    }

    loadArticles()
  }, [startEntries, articleType])

  window.onscroll=debounce(() => {
    if (
      Math.abs(window.innerHeight + document.documentElement.scrollTop - document.documentElement.offsetHeight)<=2
    ) {
      setIsLoaded(false);
      setStartEntries(startEntries + 20)
    }
  },100)


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
  }
  if (apiError) {
    return <Apierror></Apierror>
  }
  else {
    return (
      <>
        <div className="flex flex-col items-center">
          <Card>{cardHeaderContents(articleType)}</Card>
          {content()}
        </div>
        {!isLoaded && (<div className="flex flex-row justify-center mt-0">
        <Loader />
        </div>)}
      </>
    )
  }
}

export default FetchArticles
