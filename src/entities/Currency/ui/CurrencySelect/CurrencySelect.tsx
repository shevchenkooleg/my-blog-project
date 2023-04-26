import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className?: string
    value?: string
    onChange?: (currency: Currency) => void
    readOnly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, readOnly, onChange } = props
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            items={options}
            value={value}
            defaultValue={t('Укажите валюту')}
            readOnly={readOnly}
            direction={"top left"}
            label={t('Укажите валюту')}
        />
    )
});

CurrencySelect.displayName = 'CurrencySelect'
