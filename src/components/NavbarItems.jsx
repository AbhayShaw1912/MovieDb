"use client";
import React from 'react';
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItems({title,params}) {
    const searchParams =useSearchParams();
    const genre=searchParams.get("genre");

    return (
        <button className={`py-1 px-2  font-semibold rounded border-black border-2 ${genre === params ? 'bg-blue-600 dark:bg-amber-500 dark:text-white':''}`}>
            <Link href={`/?genre=${params}`} >
                {title}
            </Link>

        </button>
    );
}
