import { classNames } from "shared/lib/classNames/classNames";
import { type FC } from 'react';
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { profileReducer } from "entities/Profile/model/slice/profileSlice";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage
