"use client";
import React, {useState} from 'react';
import {useTheme} from "next-themes";
import {MdDarkMode, MdLightMode} from "react-icons/md";

export default function ThemeModeToggleButton(props) {
   const {theme,setTheme,systemTheme}=useTheme();
   const currentTheme= theme === 'system' ? systemTheme:theme;
    return (
        <div>
            {
                currentTheme === 'dark' ?
                    <MdLightMode className="text-lg cursor-pointer " onClick={()=>setTheme('light')} />:<MdDarkMode className="text-lg cursor-pointer  " onClick={()=>setTheme('dark')}/>
            }

        </div>
    );
};
