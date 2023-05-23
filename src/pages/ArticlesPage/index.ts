export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage/ArticlesPageAsync'
export type { ArticlesPageSchema } from './model/types/articlesPageSchema'
export {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageLimit,
    getArticlesPagePageNum,
    getArticlesPageHasMore
} from './model/selectors/artcilesPageSelectors'

export { articlesPageActions } from './model/slice/articlesPageSlice'
export { fetchArticlesList } from './model/services/fetchArticlesList/fetchArticlesList'


