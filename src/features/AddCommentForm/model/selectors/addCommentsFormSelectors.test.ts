import { type StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormIsLoading, getAddCommentFormText } from "./addCommentsFormSelectors";

describe('addCommentsFormSelectors.test', () => {
    test('should return comment text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Bla-bla'
            }
        }
        expect(getAddCommentFormText(state as StateSchema)).toBe('Bla-bla')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormText(state as StateSchema)).toBe('')
    })
    test('should return comment addCommentForm error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'Some error'
            }
        }
        expect(getAddCommentFormError(state as StateSchema)).toBe('Some error')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormError(state as StateSchema)).toBe(undefined)
    })
    test('should return comment isLoading status', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                isLoading: true
            }
        }
        expect(getAddCommentFormIsLoading(state as StateSchema)).toBe(true)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormIsLoading(state as StateSchema)).toBe(undefined)
    })
})
