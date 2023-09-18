import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [posts]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/get-blogs");
    const data = await response.json();
    setPosts(data.blogs);
  };

  return (
    <div className="my-10 flex flex-col gap-5">
      {posts.map((post) => {
        return (
          <SingleCard
            title={post.title}
            key={post._id}
            description={post.description}
            id={post._id}
          />
        );
      })}
    </div>
  );
};

export default Home;
