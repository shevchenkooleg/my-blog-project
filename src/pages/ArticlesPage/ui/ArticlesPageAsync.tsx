import { lazy } from 'react';



export const ArticlesPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error  setTimeout do not work with Promise
    setTimeout(() => { resolve(import('./ArticlesPage')) }, 1500)
}));
