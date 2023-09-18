/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

const SingleCard = ({ title, description, id }) => {
  const [editPost, setEditPost] = useState(false);
  const [title1, setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const deletePost = async () => {
    const response = await fetch(`http://localhost:5000/delete-blog/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      toast.success("Blog Deletd Successfully!");
    } else {
      toast.error("something went wrong");
    }
  };

  const updatePost = async (id) => {
    console.log(title1, description1, id);
    const response = await fetch(`http://localhost:5000/update-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title1, description: description1 }),
    });

    if (response.status === 200) {
      toast.success("Blog updated Successfully!");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      {" "}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-[40vw] mx-auto p-3 rounded-md shadow-md">
        <div className="flex justify-end text-lg gap-3">
          <MdOutlineEdit
            className="text-gray-300 hover:text-red-400 cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              setEditPost(!editPost);
            }}
          />
          <AiFillDelete
            className="text-gray-300 hover:text-red-400 cursor-pointer hover:scale-110 transition-all"
            onClick={() => deletePost(id)}
          />
        </div>
        <h2
          className="text-lg font-bold my-2 focus:bg-gray-200"
          contentEditable={editPost}
          style={{ outline: "none" }}
          onInput={(e) => setTitle1(e.target.innerText)}
        >
          {title}
        </h2>
        <h3
          className="text-gray-500 font-semibold selection:bg-green-300 focus:bg-gray-200"
          contentEditable={editPost}
          style={{ outline: "none" }}
          onInput={(e) => setDescription1(e.target.innerText)}
        >
          {description}
        </h3>
        {editPost && (
          <button
            className={`bg-purple-400 hover:bg-purple-600 px-5 py-1 my-1 rounded-md text-white`}
            onClick={() => {
              updatePost(id);
            }}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default SingleCard;
