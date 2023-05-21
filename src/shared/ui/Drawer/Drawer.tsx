import cls from "./Drawer.module.scss"
import { classNames, type Mods } from "shared/lib/classNames/classNames";
import { memo, type ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props
    const { theme } = useTheme()
    const { close, isClosing } = useModal({ isOpen, onClose, animationDelay: 300 })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});

Drawer.displayName = 'Drawer'
