import { useContext } from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}



export function useTheme(): UseThemeResult {

    const {theme,setTheme} = useContext(ThemeContext)

    const newTheme = theme === 'light' ? Theme.DARK : Theme.LIGHT

    const toggleTheme = () => {
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme
    }

}