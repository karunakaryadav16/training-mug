
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../store";
import { savePicture, savePost, unsavePicture, unsavePost } from "../store/slice";
import PictureSection from "../components/axios";
import PostSection from "../components/post";
import SearchBar from "../components/search";

interface Picture {
  id: number;
  title: string;
  url: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { savedPictures, savedPosts } = useSelector((state: RootState) => state.savedItems);

  const [pictures, setPictures] = useState<Picture[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPictures(response.data.slice(0, 20));
      });

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data.slice(0, 20));
      });
  }, []);

  const handleSavePicture = (id: number) => {
    dispatch(savePicture(id));
  };

  const handleUnsavePicture = (id: number) => {
    dispatch(unsavePicture(id));
  };

  const handleSavePost = (id: number) => {
    dispatch(savePost(id));
  };

  const handleUnsavePost = (id: number) => {
    dispatch(unsavePost(id));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredPictures = pictures.filter((picture) =>
    picture.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onChange={handleSearch} />
      <PictureSection
        pictures={filteredPictures}
        savedPictures={savedPictures}
        onSave={handleSavePicture}
        onUnsave={handleUnsavePicture}
      />
      <PostSection
        posts={filteredPosts}
        savedPosts={savedPosts}
        onSave={handleSavePost}
        onUnsave={handleUnsavePost}
      />
    </div>
  );
};

export default Home;































