import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-10">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We are a passionate team of writers and creators dedicated to sharing insightful and engaging content with our readers. Our goal is to provide valuable information to help you stay informed and inspired.
                </p>
            </div>

            {/* Our Mission */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        Our mission is to inspire, educate, and entertain our readers with high-quality content. We believe in the power of storytelling and the impact it can have on people's lives. We aim to provide insightful articles that enrich your knowledge and spark new ideas.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center bg-white shadow-md rounded-lg p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 1"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                            <p className="text-gray-600">Founder & Editor</p>
                            <p className="text-gray-500 mt-4">
                                John is the creative mind behind our blog. He has a passion for storytelling and has been writing for over 10 years.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="text-center bg-white shadow-md rounded-lg p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 2"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-gray-600">Content Strategist</p>
                            <p className="text-gray-500 mt-4">
                                Jane specializes in content planning and strategy. Her goal is to ensure we deliver relevant and impactful content to our readers.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="text-center bg-white shadow-md rounded-lg p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 3"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
                            <p className="text-gray-600">Lead Writer</p>
                            <p className="text-gray-500 mt-4">
                                Alice is our lead writer with a knack for creating compelling content. She ensures every article resonates with our audience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-600 py-16 text-center text-white">
                <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
                <p className="text-lg mb-8">
                    Stay updated with the latest articles and news. Subscribe to our newsletter today!
                </p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
                    Subscribe Now
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
