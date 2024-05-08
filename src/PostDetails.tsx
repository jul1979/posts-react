import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Post } from './App';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

function PostDetails() {

    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => response.json())
                .then((data: Post) => {
                    setPost(data);
                });
        }
        fetchPosts();
    }, [id]);
return (
    <div className="flex mb-50 flex-col justify-center items-center h-screen space-y-4">
        <Button onClick={() => navigate(-1)}>Go back</Button>
        {post ? (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-48 w-48" src="https://source.unsplash.com/random" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
)
}

export default PostDetails