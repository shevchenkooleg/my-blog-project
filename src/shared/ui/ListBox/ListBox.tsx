import cls from "./ListBox.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, type ReactNode } from "react";
import { Listbox as HListbox } from '@headlessui/react'
import { Button } from "../Button/Button";
import { HStack } from "../Stack";

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
    className?: string
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    readOnly?: boolean
    label?: string
    direction?: DropdownDirection
    onChange: <T extends string>(value: T) => void
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: cls.optionTop,
    bottom: cls.optionBottom
}

export const ListBox = (props: ListBoxProps) => {
    const { className, items, value, defaultValue, readOnly, label, direction = 'bottom', onChange } = props

    const optionClasses = [
        mapDirectionClass[direction]
    ]

    return (
        <HStack gap={'16'}>
            {label &&
                <span>
                    {label}
                </span>
            }
            <HListbox
                as={'div'}
                disabled={readOnly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button
                    className={cls.trigger}
                >
                    <Button disabled={readOnly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionClasses)}>
                    {items?.map((item, id) => (
                        <HListbox.Option
                            key={id}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled
                                        }, []
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>

    )
}



// ListBox.displayName = 'ListBox'
