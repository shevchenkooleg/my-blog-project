import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import {
    getProfileData
} from "../../model/selectors/getProfileData/getProfileData/getProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile')
    const readOnly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = String(authData?.id) === profileData?.id
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
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditBtn'}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap={'16'}>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelBtn'}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid={'EditableProfileCardHeader.SaveBtn'}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            )}
        </HStack>
    )
});

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader'
