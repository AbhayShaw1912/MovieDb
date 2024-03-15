"use client"
import React from 'react';
import NavbarItems from "@/components/NavbarItems";

export default function Navbar() {

    return (
       <div className="flex  justify-center ">
           <NavbarItems title="Trending" params="fetchTopTrending"  />
           <NavbarItems title="Popular" params="fetchTopPopular" />
       </div>
    );
}
