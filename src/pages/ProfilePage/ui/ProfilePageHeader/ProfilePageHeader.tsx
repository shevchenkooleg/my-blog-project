import cls from "./ProfilePageHeader.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')
    const readOnly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])
    const onSave = useCallback(() => {
        dispatch(updateProfileData(String(authData?.id)))
    }, [dispatch, authData])


    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readOnly
                        ? (
                            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t('Отменить')}
                                </Button>
                                <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )
                    }
                </div>
            )}
        </div>
    )
}
