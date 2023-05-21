import cls from "./ProfileCard.module.scss"
import { classNames, type Mods } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input, InputTypes } from "@/shared/ui/Input/Input";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text/Text"
import { type Profile } from "../../model/types/profile";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { type Currency, CurrencySelect } from "@/entities/Currency";
import { type Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readOnly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void

}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props


    if (isLoading) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTRE}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readOnly
    }


    return (
        <VStack gap={'16'} max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar &&
                    <HStack justify={"center"} max>
                        <Avatar avatar={data?.avatar}/>
                    </HStack>
            }
            <Input
                value={data?.firstName}
                placeholder={t('Ваше имя')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeFirstName}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                value={data?.lastName}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeLastName}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                value={data?.age ? data?.age.toString() : ''}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeAge}
                type={InputTypes.NUMBER}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeCity}
            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeUsername}
            />
            <Input
                value={__PROJECT__ === 'storybook' ? '' : data?.avatar}
                placeholder={t('Аватар')}
                className={cls.input}
                readOnly={readOnly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readOnly={readOnly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readOnly={readOnly}
            />
        </VStack>
    );
};
