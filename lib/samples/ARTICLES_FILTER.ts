export type ArticleFiltersData = { 
  key: string
  label: string
}

export const articleFilters: ArticleFiltersData[] = [
  {key: 'all', label: 'All'},
  {key: 'authorial', label: 'Authorial'},
  {key: 'recommended', label: 'Recommended'},
]
