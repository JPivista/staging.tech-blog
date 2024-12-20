import { Calendar, Clock, Person } from 'react-bootstrap-icons';

export const FeaturedPost = () => {
    return (
        <>
            <div className='container py-4'>
                <div className='text-center py-10'>
                    <h1 className="mb-4 text-5xl font-bold text-gray-900">
                        Welcome to DevBlog
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Discover the latest insights, tutorials, and best practices in web
                        development, design, and technology.
                    </p>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                    {/* Featured Image */}
                    <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                        alt="Featured post"
                        className="h-[400px] w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 p-8 text-white">
                        <div>
                            {/* Post Tag */}
                            <span className="mb-2 inline-block rounded-full bg-indigo-600 px-3 py-1 text-sm">
                                Featured
                            </span>
                            {/* Post Title */}
                            <h2 className="mb-4 text-3xl font-bold">The Art of Mindful Writing</h2>
                            {/* Post Meta Information */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Person size={16} />
                                    <span>John Doe</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>March 15, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedPost