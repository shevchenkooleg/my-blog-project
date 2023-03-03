import cls from "./Input.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import React, { type FC, type InputHTMLAttributes } from 'react';

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputAttributes {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps

    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} `}
                </div>
            )}
            <input type={type} value={value} onChange={onChangeHandler} {...otherProps}/>
        </div>
    );
};