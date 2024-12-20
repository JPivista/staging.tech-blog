import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostLandingPage = () => {
    const { postId } = useParams();
    const post = posts.find((p) => p.id === parseInt(postId));

    if (!post) {
        return <div>Post not found!</div>;
    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center lg:px-0 px-3'>
                <div className="container py-4">
                    <div className="flex flex-col justify-center">
                        <div className="lg:grid lg:grid-cols-4 flex flex-col lg:gap-14 gap-5">
                            <div className="col-span-3">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full rounded-lg h-[400px] object-cover"
                                />
                                <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
                                <p className="mt-4 text-gray-700">{post.excerpt}</p>
                                <p className="mt-2 text-gray-500">Author: {post.author}</p>
                                <p className="mt-1 text-gray-500">Date: {post.date}</p>
                            </div>

                            <div className="col-span-1">
                                {/* Check if the advertisement image exists */}
                                {post.advertisementImage && post.advertisementImage.trim() !== "" ? (
                                    <img
                                        src={post.advertisementImage}
                                        alt="Advertisement"
                                        className="mt-4 w-full rounded-lg h-[400px] object-cover"
                                    />
                                ) : (
                                    <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center h-[400px]">
                                        <p >Advertisement</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col justify-center items-center">
                            <div className="lg:w-[80%] w-full rounded-lg h-[300px] object-cover">
                                {post.advertisementImage && post.advertisementImage.trim() !== "" ? (
                                    <img
                                        src={post.advertisementImage}
                                        alt="Advertisement"
                                        className="mt-4 w-full rounded-lg h-[300px] object-cover"
                                    />
                                ) : (
                                    <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center h-[250px] w-full">
                                        <p >Advertisement</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostLandingPage;
