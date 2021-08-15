export interface IArticle {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: Date
  updatedAt: Date
  featured: boolean
  launches: Array<IEvent>
  events: Array<IEvent>
}

export interface IEvent {
  id: string
  provider: string
}
