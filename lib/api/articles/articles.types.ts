export type ArticleData = {
    id: number, 
    url: string, 
    title: string,
    date: string,
    readingTime: number,
    image?: string,
    type: string
}

export type CreateArticleData = {
    url: string, 
    title: string,
    date: string,
    readingTime: number,
    image?: string,
    type: string
}
