import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainPageIcon from "@/shared/assets/icons/MainPage.svg";
import AboutPageIcon from "@/shared/assets/icons/AboutPage.svg";
import ProfilePageIcon from "@/shared/assets/icons/ProfilePage.svg";
import ArticlesPageIcon from "@/shared/assets/icons/ArticlesPage.svg";
import { type SidebarItemType } from "../../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'главная',
                Icon: MainPageIcon
            },
            {
                path: RoutePath.about,
                text: 'о сайте',
                Icon: AboutPageIcon
            }
        ]

        if (userData) {
            sidebarItemsList.push({
                path: `${RoutePath.profile}${String(userData.id)}`,
                text: 'Профиль',
                Icon: ProfilePageIcon,
                authOnly: true
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticlesPageIcon,
                authOnly: true
            })
        }

        return sidebarItemsList
    }
)
