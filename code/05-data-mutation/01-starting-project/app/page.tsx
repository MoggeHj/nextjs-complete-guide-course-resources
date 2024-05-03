import { Suspense } from "react";

import Posts from "@root/components/posts";
import { getPosts } from "@root/lib/posts";

const LatestPosts = async () => {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
};

const Home = () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
