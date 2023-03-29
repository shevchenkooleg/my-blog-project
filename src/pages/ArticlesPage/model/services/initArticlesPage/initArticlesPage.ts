import { getArticlesPageIsInit } from "pages/ArticlesPage/model/selectors/artcilesPageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";


export const initArticlesPage = createAsyncThunk<void, undefined, ThunkConfig<string> >(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const isInit = getArticlesPageIsInit(getState())
        if (!isInit) {
            dispatch(articlesPageActions.initState())
            dispatch(fetchArticlesList({
                page: 1
            }))
        }
    }
)


