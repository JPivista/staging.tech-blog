import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigating back to the home page

const NotFound = () => {
    const navigate = useNavigate();  // Create a navigate function

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page or any route you want
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 px-6">
            <div className="text-center bg-white shadow-lg p-10 rounded-lg max-w-md w-full">
                <h1 className="text-5xl font-bold text-indigo-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oops! Page not found.</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                </p>
                <button
                    onClick={handleGoHome}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
