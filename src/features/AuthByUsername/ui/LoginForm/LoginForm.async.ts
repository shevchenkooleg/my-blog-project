import { type FC, lazy } from 'react';
import { type LoginFormProps } from "./LoginForm";


export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
    // для имитации работы серверного API
    setTimeout(() => { resolve(import('./LoginForm')) }, 500)
}));
