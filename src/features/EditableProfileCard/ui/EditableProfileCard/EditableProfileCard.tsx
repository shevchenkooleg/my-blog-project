import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { type Currency } from "entities/Currency";
import { type Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileErrors } from '../../model/selectors/getProfileErrors/getProfileErrors';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from 'entities/Profile';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { VStack } from "shared/ui/Stack";
import {
    EditableProfileCardHeader
} from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
    className?: string
    id?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { id } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileErrors)
    const validateErrors = useSelector(getProfileValidateErrors)
    const readOnly = useSelector(getProfileReadonly)

    const validateErrorsTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_USER_NAME]: t('Имя пользователя должно быть более 3 символов')
    }

    const reducers: ReducerList = {
        profile: profileReducer
    }


    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })


    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            firstName: value || ''
        }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastName: value || ''
        }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value || '')
        }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value || ''
        }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || ''
        }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value || ''
        }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency
        }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({
            country
        }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack max>
                <EditableProfileCardHeader/>
                {validateErrors?.length && validateErrors.map((err, i) =>
                    <Text theme={TextTheme.ERROR} text={validateErrorsTranslates[err]} key={i}/>)}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});

EditableProfileCard.displayName = 'EditableProfileCard'
