import Posts from "@root/components/posts";
import { getPosts } from "@root/lib/posts";

const FeedPage = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
};

export default FeedPage;
