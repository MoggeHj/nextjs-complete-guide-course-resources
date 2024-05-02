import PostForm from "@root/components/post-form";
import createPostHandler from "@root/actions/posts";

const NewPostPage = () => {
  return <PostForm action={createPostHandler} />;
};

export default NewPostPage;
