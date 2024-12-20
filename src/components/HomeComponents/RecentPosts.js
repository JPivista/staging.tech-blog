import { Calendar, Person } from 'react-bootstrap-icons';

const posts = [
    {
        id: 1,
        title: 'Getting Started with React 18',
        excerpt: 'Learn about the latest features in React 18 and how to use them effectively.',
        author: 'Jane Smith',
        date: 'March 14, 2024',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    },
    {
        id: 2,
        title: 'Mastering TypeScript',
        excerpt: 'Deep dive into TypeScript features that will make your code more robust.',
        author: 'Mike Johnson',
        date: 'March 13, 2024',
        image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656',
    },
    {
        id: 3,
        title: 'Modern CSS Techniques',
        excerpt: 'Explore the latest CSS features and how they can improve your styling workflow.',
        author: 'Sarah Wilson',
        date: 'March 12, 2024',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    },
];

export const RecentPosts = () => {
    return (
        <>
            <div className='container py-4'>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Recent Posts</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <article
                            key={post.id}
                            className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">{post.title}</h3>
                                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Person size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};
