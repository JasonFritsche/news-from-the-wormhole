import React, { FunctionComponent } from 'react'
import { IArticle } from '../models/Article'
import { formattedDate } from '../util/DateUtil'

interface Props {
  article: IArticle
}

const Article: FunctionComponent<Props> = ({ article }) => {
  console.log(article)
  return (
    <div className="py-1 my-3 w-3/4 bg-indigo-200 shadow-xl hover:shadow-md">
      <div className="flex flex-col px-5 pb-2">
        <div className="flex flex-col pb-1 border-b-2 border-gray-400 border-solid">
          <div>
            <h1 className="text-blue-900">{article.title}</h1>
          </div>
          <div className="flex flex-row">
            <div className="mr-4">
              <h1 className="font-semibold text-gray-800">
                {article.newsSite}
              </h1>
            </div>
            <div>
              <h1 className="italic font-thin text-gray-600">
                {formattedDate(article.updatedAt)}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{article.summary}</p>
        </div>
        <div>
          <img src={article.imageUrl} alt="article image" />
        </div>
      </div>
    </div>
  )
}

export default Article
