import { render } from '@testing-library/react';
import { type ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { type StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { classNames } from "../../classNames/classNames";
// eslint-disable-next-line path-import-validation-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line path-import-validation-plugin/layer-imports
import "@/app/styles/index.scss"

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export interface TestProviderProps {
    children: ReactNode
    options?: componentRenderOptions
    theme?: Theme
}

export function TestProvider (props: TestProviderProps) {
    const { options = {}, children, theme = Theme.DARK } = props

    const {
        route = '/',
        initialState,
        asyncReducers
    } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTest}>
                    <Suspense fallback=''>
                        <ThemeProvider initialTheme={theme}>
                            <div className={classNames('app', {}, [theme])}>
                                {children}
                            </div>
                        </ThemeProvider>
                    </Suspense>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    return render(
        <TestProvider options={options}>
            {component}
        </TestProvider>)
}
