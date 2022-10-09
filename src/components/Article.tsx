import React, { FunctionComponent } from 'react'
import Card from './Card'
import { IArticle } from '../models/Article'
import { formattedDate } from '../util/DateUtil'

interface Props {
  article: IArticle
  type: string
}

const Article: FunctionComponent<Props> = ({ article, type }) => {
  const navigateToExternalUrl = (url: string, shouldOpenNewTab = true) =>
    shouldOpenNewTab ? window.open(url, '_blank') : (window.location.href = url)
  return (
    <Card>
      <div className="flex flex-1">
        <img
          className="h-full w-full overflow-hidden rounded-tl-2xl rounded-bl-2xl object-cover"
          src={article.imageUrl}
          alt="Article Image"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-start gap-12 p-3.5">
        <h2 className="object-cover text-4xl font-extrabold text-blue-200">
          {article.title}
        </h2>
        <p className="text-gray-300">{article.summary}</p>
        <div className="flex justify-between">
          <div className="farticle-meta-label">
            <div>
              <a className="pt-1 text-sm font-bold text-purple-800">Source</a>
            </div>
            <div>
              <a className="pt-1 text-sm text-purple-700">{article.newsSite}</a>
            </div>
          </div>
          <div className="article-meta-label">
            <div>
              <a className="pt-1 text-sm font-bold text-purple-800">
                Published
              </a>
            </div>
            <div>
              <a className="pt-1 text-sm text-purple-700">
                {formattedDate(article.publishedAt)}
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={() => navigateToExternalUrl(article.url, true)}
              className="inline-block whitespace-nowrap rounded-md border border-purple-800 p-2 text-center text-purple-800 hover:bg-purple-800 hover:text-purple-100 hover:shadow-xl"
              type="button"
            >
              View {type}
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Article
