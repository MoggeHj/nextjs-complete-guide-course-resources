"use server"; //this directive is not a 100% guarantee that the code will run only on the server. Use "server-only" package for that.
import { redirect } from "next/navigation";

import { storePost } from "@root/lib/posts";

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

  await storePost({
    imageUrl: "",
    title: title.trim(),
    content: content.trim(),
    userId: 1,
  });

  redirect("/feed");
};

export default createPostHandler;
