import { type FC, type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from "react-redux";
import { type ReduxStoreWithManager, type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { type Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager


    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })


        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@KILL ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    },[])

    return (
        <>{ children }</>
    );
};
