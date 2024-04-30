import NewsList from "@root/components/news-list";
import { getAllNews } from "@root/lib/news";

//Server component to fetch data on the server.
//All data will be fetched on the server when rendering the page.
const NewsPage = async () => {
  //Fetching data from a local db. Or you could use an ORM in the lib folder.
  const news = await getAllNews();

  //Fetching data from a separate backend process
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  //const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
