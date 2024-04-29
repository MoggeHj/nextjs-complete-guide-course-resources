import NewsList from "@root/components/news-list";
import { getNewsForYear } from "@root/lib/news";
import exp from "constants";

const FilteredNewsPage = ({ params }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
};

export default FilteredNewsPage;
