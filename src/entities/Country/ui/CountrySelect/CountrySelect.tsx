import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ListBox } from "@/shared/ui/Popups";


interface CountrySelectProps {
    className?: string
    value?: string
    onChange?: (country: Country) => void
    readOnly?: boolean
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, readOnly, onChange } = props
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (

        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            items={options}
            readOnly={readOnly}
            direction={"top left"}
            label={t('Укажите страну')}
        />
    );
});

CountrySelect.displayName = 'CountrySelect'
