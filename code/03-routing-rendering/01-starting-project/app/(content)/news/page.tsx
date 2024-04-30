import Link from "next/link";

import { DUMMY_NEWS } from "@root/dummy-news";
import NewsList from "@root/components/news-list";

const newsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default newsPage;
