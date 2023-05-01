import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";
import { type Comment } from "entities/Comment";

const commentData: Comment = {
    id: '1',
    user: {
        id: 1,
        username: 'admin',
        avatar: 'https://i.imgur.com/qw7CV6k.jpg'
    },
    text: 'Bla'
}

describe('addCommentForArticle.test', () => {
    test('success adding comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleDetails: {
                data: {
                    id: '1'
                }
            },
            user: {
                authData: {
                    id: 1
                }
            },
            addCommentForm: {
                text: 'Bla'
            }
        })

        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentData }))
        const result = await thunk.callThunk(undefined);
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(commentData)
    })
})
