import cls from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { type FC, useState } from 'react';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/import";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
