import { useEffect, useState } from "react";
import Search from "./Search";
import { User } from "lucide-react";
import UserList from "./UserList";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PostList from "./PostList";
import RoutesComponent from "./RoutesComponent";

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


function App() {
  //const [users, setUsers] = useState<User[]>([]);



/*   const fetchusers = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data: User[]) => {
      //console.log(data);
      setUsers(data);
    });
  }
  useEffect(() => {
    fetchusers();
  }); */
 /* const fetchPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data: Post[]) => {
      //console.log(data);
      setPosts(data);
    });
  }
  useEffect(() => {
    fetchPosts();
  });*/

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between mb-4">
        {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      </div>
      {/* <RoutesComponent posts={posts} searchTerm={searchTerm} /> */}
      <RoutesComponent  />
      {/* <UserList users={users} searchTerm={searchTerm} /> */}
      {/* <PostList posts={posts} searchTerm={searchTerm} /> */}
      <Footer />
    </>
  )
}

export default App
