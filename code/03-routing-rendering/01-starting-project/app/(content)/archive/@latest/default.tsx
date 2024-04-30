//Default.tsx is the fallback page when parallell routes goes wrong. The name Default is reserved. If it does not exist the fallback is the page.tsx file.

import NewsList from "@root/components/news-list";
import { getLatestNews } from "@root/lib/news";

const DefaultPage = () => {
  const latestNest = getLatestNews();
  return (
    <>
      <h2>Latest Archive Page (DefaultView when the path does not exist)</h2>;
      <NewsList news={latestNest} />
    </>
  );
};

export default DefaultPage;
