export type ArticleFiltersData = { 
  key: string
  label: string
}

export type ArticleData = { 
  id: number, 
  url: string, 
  title: string,
  date: string,
  readingTime: number,
  image?: string,
  type: string
}

export const articleFilters: ArticleFiltersData[] = [
  {key: 'all', label: 'All'},
  {key: 'authorial', label: 'Authorial'},
  {key: 'recommended', label: 'Recommended'},
]

export const ARTICLES: ArticleData[] = []