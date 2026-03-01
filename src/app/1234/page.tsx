// Updated page.tsx with proper TypeScript types and fixes

import React from 'react';

// Define the props type
interface PageProps {
    title: string;
    content: string;
}

const Page: React.FC<PageProps> = ({ title, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default Page;