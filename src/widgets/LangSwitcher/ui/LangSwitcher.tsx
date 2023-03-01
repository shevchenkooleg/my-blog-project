import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import { type FC } from 'react';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {short ? t('короткий язык') : t('язык')}
        </Button>
    )
};
