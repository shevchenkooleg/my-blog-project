import cls from "./Avatar.module.scss"
import { classNames, type Mods } from "@/shared/lib/classNames/classNames";
import { type CSSProperties, useMemo } from "react";

interface AvatarProps {
    className?: string
    avatar?: string
    size?: number
    alt?: string
    round?: number
}

export const Avatar = (props: AvatarProps) => {
    const { className, avatar, size, round = 50, alt } = props
    const mods: Mods = {}
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
            borderRadius: `${String(round)}%`
        }
    }, [round, size])

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
            style = {styles}
            src={avatar}
        />
    );
};
