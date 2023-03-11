import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutPageIcon from 'shared/assets/icons/AboutPage.svg'
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'
import type React from 'react'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}


export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'главная',
        Icon: MainPageIcon
    },
    {
        path: RoutePath.about,
        text: 'о сайте',
        Icon: AboutPageIcon
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfilePageIcon,
        authOnly: true
    }
]
