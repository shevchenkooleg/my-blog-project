import cls from "./Modal.module.scss"
import { classNames, type Mods } from "shared/lib/classNames/classNames";
import React, { type FC, type MutableRefObject, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from "../../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../../Overlay/Overlay";

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    element?: HTMLElement
}

export const Modal: FC<ModalProps> = (props) => {
    const ANIMATION_DELAY = 300

    const {
        className,
        children,
        isOpen,
        onClose,
        element
    } = props

    const { theme } = useTheme()

    const closeHandler = useCallback(() => {
        setIsClosing(true)
        if (onClose) {
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }


    return (
        <Portal element={element}>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                {/* <div className={cls.overlay} onClick={closeHandler}> */}
                <Overlay onClick={closeHandler}/>
                <div className={cls.content}>
                    {children}
                </div>
                {/* </div> */}
            </div>
        </Portal>

    );
};
