import React, { useState, useEffect } from "react";
import { BsCircleFill, BsMoonFill } from "react-icons/bs";
import './themeSwitcher.scss'

function ThemeSwitcher(props) {

    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return (
        <a
            className="mode-switcher-container"
        > 
            {mode === "dark" ? 
                <div className='mode-switch' onClick={() =>
                    setMode(mode => (mode === "dark" ? "light" : "dark"))   
                }>
                    <div className="icon"><BsCircleFill /></div>
                    <div className="icon active"><BsMoonFill /></div>
                </div> 
                :
                <div className='mode-switch' onClick={() =>
                    setMode(mode => (mode === "dark" ? "light" : "dark"))   
                }>
                    <div className="icon active"><BsCircleFill /></div>
                    <div className="icon"><BsMoonFill /></div>
                </div> 
            }                           
        </a>
    );
}

export default ThemeSwitcher