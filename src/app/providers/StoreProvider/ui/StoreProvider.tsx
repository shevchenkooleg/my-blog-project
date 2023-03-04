import { type FC, type ReactNode } from 'react';
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { type StateSchema } from "../config/StateSchema";
import { type DeepPartial, type ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children: ReactNode
    initialState?: StateSchema
    asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props

    const store = createReduxStore(initialState, asyncReducers)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
