import React from 'react';
import Card from "@/components/Card";

export default function Results({results}) {
    const filteredResults = results.filter(result => result.backdrop_path !== null);
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl  mx-auto py-4'>
            {filteredResults.map((results) => (
                <Card key={results.id} results={results}/>
            ))}
        </div>
    );
}
