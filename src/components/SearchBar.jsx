"use client";
import React, {useState} from 'react';
import {useRouter} from "next/navigation";

export default function SearchBar () {
    const [search,setSearch]=useState("");
    const router=useRouter();
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }
   const handleSubmit=(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`)

   }
    return (
        <form className="mt-10 flex justify-center " onSubmit={handleSubmit}>
            <input type="text" placeholder="Search here..." className="py-1 px-2 rounded-tl rounded-bl outline-none border-2 border-black " value={search} onChange={handleSearch}/>
            <button className="font-semibold bg-blue-600 text-white px-2 py-1 rounded-tr rounded-br border-2 border-black disabled:bg-red-700" disabled={search === ''}>Search</button>
        </form>
    );
}
