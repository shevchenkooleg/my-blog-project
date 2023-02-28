import cls from './Button.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { type ButtonHTMLAttributes, type FC } from 'react';


export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, onClick, theme } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
