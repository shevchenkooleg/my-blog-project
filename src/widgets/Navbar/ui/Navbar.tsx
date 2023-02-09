import cls from './Navbar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar')

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={classNames(cls.mainLink)}>{t('главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t('о сайте')}</AppLink>
            </div>
        </div>
    );
};






