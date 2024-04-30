import NewsList from "@root/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
  getNewsForYear,
} from "@root/lib/news";
import Link from "next/link";

//The folder [[...filter]] is a dynamic route and the naming makes it a catch all route. It will catch all routes that are not defined in the folder structure.
const FilteredNewsPage = ({ params }) => {
  const filter = params.filter; // params.filter is an array of the filter values
  console.log(filter);

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const selectedMonthNumber = Number(selectedYear); //Convert the selected year to a number. Or you can use +selectedYear as dibe for selectedMonth
  if (
    (selectedYear && !getAvailableNewsYears().includes(selectedMonthNumber)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
