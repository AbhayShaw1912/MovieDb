import React from 'react';
import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center mt-16">
            <Image width={200} height={200} src="Blocks.svg" alt="loading"/>
        </div>

    );
}
