import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PostList from './PostList';
import { Post } from './App';
import NoMatch from './NoMatch';
import PostDetails from './PostDetails';

/* type RoutesComponentProps = {
  posts: Post[];
  searchTerm: string;
}; */

function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/posts/:id" element={<PostDetails/>} />
        </Routes>
    )
}

export default RoutesComponent;