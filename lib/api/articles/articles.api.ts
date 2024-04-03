import { api } from '../../redux/api'
import { ArticleData } from './articles.types'

const articlesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Sending cookieToken for creating new cache when cookie changes
    getAllArticles: builder.query<ArticleData[], string>({
      query: (filter) => {
        if (filter==='all' || !filter) return `/articles`;
        return `/articles?type=${filter}`;
      },
    }),
    getArticle: builder.query<ArticleData, string>({
      query: (articleId) => `/articles/${articleId}`,
    }),
  }),
});

export const { 
  useGetAllArticlesQuery, 
  useGetArticleQuery, 
} = articlesApi;
