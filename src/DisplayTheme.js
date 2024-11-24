import React from 'react';
import { useTheme } from './ThemeContext';

function DisplayTheme() {
    const { theme } = useTheme();
    return (
        <div className="full-height">
            <p>Tema atual: {theme}</p>
        </div>
    );
}

export default DisplayTheme;