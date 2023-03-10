import { lazy } from 'react';



export const MainPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error  setTimeout do not work with Promise
    setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}));
