import { lazy } from 'react';



export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error  setTimeout do not work with Promise
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}));
