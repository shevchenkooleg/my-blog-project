import { lazy } from 'react';



export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error  setTimeout do not work with Promise
    setTimeout(() => { resolve(import('./ArticleDetailsPage')) }, 1500)
}));
