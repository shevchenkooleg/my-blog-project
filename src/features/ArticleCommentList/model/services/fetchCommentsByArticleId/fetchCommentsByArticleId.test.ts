import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { fetchCommentsByArticleId } from "features/ArticleCommentList";
import { type Comment } from "entities/Comment";

const responseValue: Comment[] = [
    {
        id: "1",
        text: "some comment",
        user: {
            id: 1,
            username: 'admin',
            avatar: "https://i.imgur.com/qw7CV6k.jpg"
        }
    },
    {
        id: "2",
        text: "some comment 2",
        user: {
            id: 1,
            username: 'admin',
            avatar: "https://i.imgur.com/qw7CV6k.jpg"
        }
    },
    {
        id: "3",
        text: "some comment 3",
        user: {
            id: 2,
            username: 'user',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-dlya-igr.jpg'
        }
    }

]


describe('fetchCommentsByArticleId.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: responseValue }))
        const result = await thunk.callThunk('1');

        console.log(result)
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        console.log(result)
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
