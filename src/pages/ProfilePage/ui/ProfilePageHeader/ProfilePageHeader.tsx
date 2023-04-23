import { classNames } from "shared/lib/classNames/classNames";
import { useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack";

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
        <HStack max justify={'between'} className={classNames('', {}, [])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div>
                    {readOnly
                        ? (
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap={'16'}>
                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t('Отменить')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            )}
        </HStack>
    )
}
