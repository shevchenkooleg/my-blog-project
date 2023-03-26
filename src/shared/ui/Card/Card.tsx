import cls from "./Card.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { type HTMLAttributes, memo, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});

Card.displayName = 'Card'
