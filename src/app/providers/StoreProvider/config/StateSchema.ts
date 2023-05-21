import { type UserSchema } from "@/entities/User";
import { type LoginSchema } from "@/features/AuthByUsername";
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from "@reduxjs/toolkit";
import { type AxiosInstance } from "axios";
import { type ArticleDetailsSchema } from "@/entities/Article";
import { type ArticleDetailsCommentSchema } from "@/features/ArticleCommentList";
import { type AddCommentFormSchema } from "@/features/AddCommentForm";
import { type ArticlesPageSchema } from "@/pages/ArticlesPage";
import { type PageSchema } from "@/widgets/Page";
import { type ArticlesPageFiltersSchema } from "@/features/ArticlesPageFilters";
import { type rtkApi } from "@/shared/api/rtkApi";
import { type ProfileSchema } from "@/features/EditableProfileCard";


export interface StateSchema {
    user: UserSchema
    page: PageSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articlesPageFilters?: ArticlesPageFiltersSchema

}


export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
