import cls from './ThemeSwitcher.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import React, { memo } from "react";
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import OliveIcon from '@/shared/assets/icons/theme-olive.svg'
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Theme } from "@/shared/const/theme";
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >

            {theme === Theme.LIGHT
                ? <LightIcon/>
                : theme === Theme.DARK
                    ? <DarkIcon/>
                    : <OliveIcon className={cls.icon}/>}
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher'
