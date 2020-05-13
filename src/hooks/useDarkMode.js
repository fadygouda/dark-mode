import React, { useState, useEffect } from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

const useDarkMode = (key, initialValue) => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(key, initialValue);

    const toggleDarkMode = e => {
        e.preventDefault();
        return darkModeEnabled ? setDarkModeEnabled(false) : setDarkModeEnabled(true);
    }
    useEffect(() => {
        if (darkModeEnabled === true) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    }, [ darkModeEnabled ])

    return [ darkModeEnabled, setDarkModeEnabled, toggleDarkMode]
}
export default useDarkMode;