import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="border-t border-gray-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 text-center text-gray-600">
                <p>© {currentYear} DevBlog. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer