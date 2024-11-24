import React from 'react';
import { useTheme } from './ThemeContext';
function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`full-height ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    );
}


export default ThemeSwitcher;