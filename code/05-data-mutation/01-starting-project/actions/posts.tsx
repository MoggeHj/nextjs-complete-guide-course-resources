"use server"; //this directive is not a 100% guarantee that the code will run only on the server. Use "server-only" package for that.
import { redirect } from "next/navigation";

import { storePost, updatePostLikeStatus } from "@root/lib/posts";
import uploadImage from "@root/lib/cloudinary";
import exp from "constants";
import { revalidatePath } from "next/cache";

//Server Action. createPostHandler is a function running only on the server
const createPostHandler = async (prevState, formData) => {
  const title = formData.get("title"); //name="title" in the form
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }

  //Can not get Cloudinary to work. Get a 401 Invalid key for some reason
  let imageUrl;
  try {
    // imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Image upload failed. Post not created please try later.");
  }

  await storePost({
    imageUrl: "", //imageUrl,
    title: title.trim(),
    content: content.trim(),
    userId: 1,
  });

  redirect("/feed");
};

export default createPostHandler;

const togglePostLikeStatus = (postId) => {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/feed"); //revalidate the feed page (the path where the post is displayed)
};
export { togglePostLikeStatus };
