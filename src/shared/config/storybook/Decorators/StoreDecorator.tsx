import { type Story } from "@storybook/react";
import { type StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "@/features/authByUsername/testing";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { userReducer } from "@/entities/User";
import { pageSliceReducer } from "@/widgets/Page";

import { articleDetailsCommentReducer } from "@/features/articleCommentList";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    user: userReducer,
    page: pageSliceReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
)


