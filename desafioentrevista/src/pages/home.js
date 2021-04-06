import React from 'react';

export default function Home({ boxData }) {
    return(
        <div>
            {boxData.map(box => (
                <h1>{box.title}</h1>
            ))}
        </div>
    )
} 