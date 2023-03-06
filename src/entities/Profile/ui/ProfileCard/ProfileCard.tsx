import cls from "./ProfileCard.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { type FC } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData/getProfileData";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text"

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile')
    const { className } = props
    const data = useSelector(getProfileData)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.firstName} placeholder={t('Ваше имя')} className={cls.input}/>
                <Input value={data?.lastName} placeholder={t('Ваша фамилия')} className={cls.input}/>
            </div>
        </div>
    );
};
