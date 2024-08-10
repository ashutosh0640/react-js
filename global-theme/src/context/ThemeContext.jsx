import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({childer}) => {
    const [theme, setTheme] = useState('light')

    const themes = ['light', 'dark', 'violet', 'orange', 'pink'];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {childer}
        </ThemeContext.Provider>
    );
};