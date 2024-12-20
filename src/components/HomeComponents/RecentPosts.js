import { Calendar, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { posts } from "../../data/posts"; // Import blog data

export const RecentPosts = () => {
    const navigate = useNavigate();

    const handleNavigate = (postId) => {
        navigate(`/posts/${postId}`); // Navigate to the post's landing page
    };

    return (
        <div className="container py-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Recent Posts</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
                    >
                        {/* Clickable Image */}
                        <div
                            className="aspect-video overflow-hidden cursor-pointer"
                            onClick={() => handleNavigate(post.id)}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-6">
                            {/* Clickable Title */}
                            <h3
                                className="mb-2 text-xl font-bold text-gray-900 cursor-pointer hover:underline"
                                onClick={() => handleNavigate(post.id)}
                            >
                                {post.title}
                            </h3>
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
    );
};
