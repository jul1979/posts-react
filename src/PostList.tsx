import { Post } from './App';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';
import Search from '../src/Search';
import { useState,useEffect } from 'react';

/*type PostListProps = {
    posts: Post[];
    searchTerm: string;
};*/

function PostList() {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data: Post[]) => {
          //console.log(data);
          setPosts(data);
        });
      }
      useEffect(() => {
        fetchPosts();
      });
    /* const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    ); */

    const filteredPosts = searchTerm !== "" ? posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
) : posts;

    return (
        <>
        <div className='mb-4'>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-4 gap-8 ">
            {filteredPosts.length === 0 ? (
                <p className="text-red-500 font-bold">Aucun résultat</p>
            ) : (
                filteredPosts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{post.body}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link to={`/posts/${post.id}`}>
                                <Button>View Post Details</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))
            )}
        </div>
        </>
    );
}
export default PostList;