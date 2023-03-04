import { lazy } from 'react';



export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error  setTimeout do not work with Promise
    setTimeout(() => { resolve(import('./ProfilePage')) }, 1500)
}));
