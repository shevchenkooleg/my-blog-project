import { classNames } from "@/shared/lib/classNames/classNames";
import { type FC, useCallback, useState } from 'react';
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher/import";
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './Sidebar.module.scss'
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems/getSidebarItems";
import { VStack } from "@/shared/ui/Stack";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const onToggle = useCallback(() => {
        setCollapsed(prev => !prev)
    }, [])

    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : "<"}
            </Button>
            <VStack role={'navigation'} className={cls.items} gap={"16"}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed}/>
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </aside>
    );
};
