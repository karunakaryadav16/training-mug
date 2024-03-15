import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostSectionProps {
  posts: Post[];
  savedPosts: number[];
  onSave: (id: number) => void;
  onUnsave: (id: number) => void;
}

const PostSection: React.FC<PostSectionProps> = ({ posts, savedPosts, onSave, onUnsave }) => {
  return (
    <div className="flex flex-wrap bg-gray-200 p-2">
      <h2 className="w-full">Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="w-full h-285 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <div className=" border-box border-2 border-red-500 p-2 flex space-y-3 flex-col h-72">
            <h2 className="text-center">{post.title}</h2>
            <p className="text-center">{post.body}</p>
            <button
              onClick={() => (savedPosts.includes(post.id) ? onUnsave(post.id) : onSave(post.id))}
              className={`bg-green-500 w-full border border-green-700 text-white px-4 py-2 rounded-md mt-2 self-center`}
            >
              {savedPosts.includes(post.id) ? "Unsave" : "Save"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;



































































































































































































