import { DUMMY_NEWS } from "@root/dummy-news";
import exp from "constants";
import { notFound } from "next/navigation";

const newsItemPage = ({ params }) => {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);

  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1> {newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default newsItemPage;