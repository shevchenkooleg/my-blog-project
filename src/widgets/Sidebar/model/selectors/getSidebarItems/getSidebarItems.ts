import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainPageIcon from "@/shared/assets/icons/MainPage.svg";
import AboutPageIcon from "@/shared/assets/icons/AboutPage.svg";
import ProfilePageIcon from "@/shared/assets/icons/ProfilePage.svg";
import ArticlesPageIcon from "@/shared/assets/icons/ArticlesPage.svg";
import { type SidebarItemType } from "../../types/sidebar";
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/shared/const/router";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'главная',
                Icon: MainPageIcon
            },
            {
                path: getRouteAbout(),
                text: 'о сайте',
                Icon: AboutPageIcon
            }
        ]

        if (userData) {
            sidebarItemsList.push({
                path: getRouteProfile(String(userData.id)),
                text: 'Профиль',
                Icon: ProfilePageIcon,
                authOnly: true
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticlesPageIcon,
                authOnly: true
            })
        }

        return sidebarItemsList
    }
)
