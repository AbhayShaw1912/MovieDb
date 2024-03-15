import React from 'react';
import MenuItem from "@/components/MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import ThemeModeToggleButton from "@/components/ThemeModeToggleButton";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto font-semibold">
            <div className="flex gap-4">
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
                <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <div className="flex items-center gap-4">
                <ThemeModeToggleButton/>
                <Link href="/">
                    <span className=" text-white dark:bg-amber-500 font-semibold px-2 py-1 bg-zinc-900 rounded-lg" >MovieDB</span>
                </Link>
            </div>

        </div>
    );
}
