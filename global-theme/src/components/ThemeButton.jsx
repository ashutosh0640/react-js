import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
    const { theme, setTheme, themes } = useContext(ThemeContext);
    const nextTheme = themes[(currentThemeIndex + 1) % themes.lenght];
    setTheme(nextTheme)
    return (
        <button onClick={toggleTheme} className="theme-button">
            Switch Theme
        </button>
    );
};

export default ThemeButton;
