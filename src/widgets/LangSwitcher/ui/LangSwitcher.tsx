import { useTranslation } from 'react-i18next';
import 'shared/config/i18n/i18n'
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import { type FC } from 'react';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props

    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('язык')}
        </Button>
    )
};
