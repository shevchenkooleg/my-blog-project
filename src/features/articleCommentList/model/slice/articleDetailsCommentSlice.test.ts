import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";
import { type ArticleDetailsCommentSchema, fetchCommentsByArticleId } from "../../index";

describe('articleDetailsCommentSlice.test', () => {
    test('test fetchCommentsByArticleId service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            error: 'some error',
            isLoading: false,
            ids: [],
            entities: {}
        }
        expect(articleDetailsCommentReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.pending
        ))
            .toEqual({
                error: undefined,
                isLoading: true,
                ids: [],
                entities: {}
            })
    })
    test('test fetchCommentsByArticleId service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            error: 'some error',
            isLoading: false,
            ids: [],
            entities: {}
        }
        expect(articleDetailsCommentReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.fulfilled([{
                id: '1',
                user: {
                    id: 1,
                    username: 'admin'
                },
                text: "Bla-bla"
            }], '', '1')
        ))
            .toEqual({
                error: 'some error',
                isLoading: false,
                ids: ['1'],
                entities: {
                    1: {
                        id: '1',
                        user: {
                            id: 1,
                            username: 'admin'
                        },
                        text: "Bla-bla"
                    }
                }
            })
    })
})
