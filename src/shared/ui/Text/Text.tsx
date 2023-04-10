import cls from "./Text.module.scss"
import { classNames, type Mods } from "shared/lib/classNames/classNames";
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTRE = 'centre',
    LEFT = 'left'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}


export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        size = TextSize.M
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

Text.displayName = 'Text'
