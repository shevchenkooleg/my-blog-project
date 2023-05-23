import { type Story } from "@storybook/react";
import { type StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
// TODO
// eslint-disable-next-line path-import-validation-plugin/public-api-imports
import { loginReducer } from "@/features/authByUsername/model/slice/loginSlice";
// eslint-disable-next-line path-import-validation-plugin/public-api-imports
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
// eslint-disable-next-line path-import-validation-plugin/public-api-imports
import { addCommentFormReducer } from "@/features/addCommentForm/model/slice/addCommentFormSlice";
// eslint-disable-next-line path-import-validation-plugin/public-api-imports
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";
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


