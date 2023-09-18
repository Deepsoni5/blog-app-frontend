import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const CreateBlog = () => {
  const navigate = useNavigate(null);
  const postData = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const blog = {
      title,
      description,
    };

    const response = await fetch("http://localhost:5000/post-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (response.status === 200) {
      toast.success("Blog Posted Successfully!");
      e.target.title.value = "";
      e.target.description.value = "";
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[90vw] lg:w-[60vw] mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center">Create Blog</h1>
        <form
          action=""
          className="flex flex-col gap-2 mt-9"
          onSubmit={postData}
        >
          <label htmlFor="title" className="font-medium text-lg">
            Title:
          </label>
          <input
            className="px-3 py-3 rounded-md outline-none border-2 mt-2 border-gray-300"
            type="text"
            name="title"
            placeholder="Enter the blog title"
            id="title"
          />
          <label htmlFor="description" className="font-medium text-lg">
            Description:
          </label>
          <textarea
            className="rounded-md outline-none border-2 mt-2 border-gray-300"
            id="description"
            cols="30"
            rows="10"
            name="description"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-purple-300 hover:bg-purple-500 p-3 rounded-md text-white text-lg font-bold"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
