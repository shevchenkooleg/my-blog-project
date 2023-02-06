import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {FC, useState} from 'react';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {

    const {className, children} = props

    const onToggle = () => {
        setCollapsed(prev=>!prev)
    }

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*<LangSwitchet/>*/}
            </div>
        </div>
    );
};