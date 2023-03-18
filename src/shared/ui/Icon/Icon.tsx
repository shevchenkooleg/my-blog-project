import cls from "./Icon.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props

    return (
        <Svg className={classNames(cls.Icon, {}, [className])}/>
    );
});

Icon.displayName = 'Icon'