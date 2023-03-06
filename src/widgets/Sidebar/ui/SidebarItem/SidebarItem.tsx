import cls from "./SidebarItem.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { type SidebarItemType } from "widgets/Sidebar/model/items";
import { memo } from "react";

interface SidebarItemProps {
    collapsed: boolean
    item: SidebarItemType
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation()
    const { collapsed, item } = props

    return (
        <div className={classNames('', { [cls.collapsed]: collapsed })}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.item)}
            >
                <item.Icon className={cls.icon}/>
                <span className={classNames(cls.link)}>{t(`${item.text}`)}</span>
            </AppLink>
        </div>
    );
});


SidebarItem.displayName = 'SidebarItem'
