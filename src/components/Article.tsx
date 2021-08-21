import React, { FunctionComponent } from 'react'
import { IArticle } from '../models/Article'
import { formattedDate } from '../util/DateUtil'

interface Props {
  article: IArticle
}

const Article: FunctionComponent<Props> = ({ article }) => {
  const navigateToExternalUrl = (url: string, shouldOpenNewTab = true) =>
    shouldOpenNewTab ? window.open(url, '_blank') : (window.location.href = url)
  return (
    <div className="z-50 p-4 md:w-4/5 opacity-90 hover:opacity-100">
      <div className="flex flex-col sm:flex-row flex-shrink bg-gray-300 rounded-2xl shadow-xl hover:shadow-md">
        <div className="flex flex-1">
          <img
            className="object-cover overflow-hidden rounded-tl-2xl rounded-bl-2xl"
            src={article.imageUrl}
            alt="Article Image"
          />
        </div>
        <div className="flex flex-col flex-1 justify-evenly p-3.5 min-w-0">
          <h2 className="object-cover text-4xl font-extrabold text-gray-800">
            {article.title}
          </h2>
          <p className="text-gray-600">{article.summary}</p>
          <div className="flex justify-between">
            <div className="flex flex-col items-center md:items-start pr-2 border-r-2 border-gray-400 border-solid md:border-none">
              <div>
                <a className="pt-1 text-sm font-bold text-purple-800">Source</a>
              </div>
              <div>
                <a className="pt-1 text-sm text-purple-700">
                  {article.newsSite}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start pr-2 border-r-2 border-gray-400 border-solid md:border-none">
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
                className="inline-block p-2 pt-1 text-center text-purple-800 hover:text-purple-100 whitespace-nowrap hover:bg-purple-800 rounded-md border border-purple-800 hover:shadow-xl"
                type="button"
              >
                View Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
