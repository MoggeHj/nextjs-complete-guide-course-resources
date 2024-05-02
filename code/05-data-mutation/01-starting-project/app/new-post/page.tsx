import { storePost } from "@root/lib/posts";
import { userInfo } from "os";
import { title } from "process";

const NewPostPage = () => {
  //Server Action. createPostHandler is a function running only on the server
  const createPostHandler = async (formData) => {
    "use server";
    const enteredTitle = formData.get("title"); //name="title" in the form
    const enteredImage = formData.get("image");
    const enteredContent = formData.get("content");

    storePost({
      imageUrl: "",
      title: enteredTitle,
      content: enteredContent,
      userId: 1,
    });
  };
  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPostHandler}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  );
};

export default NewPostPage;
