//For parallell routes the layout component receives not only the children but props for each parallell route.
//In this case, the layout component receives the archive and latest props.
const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive (build with parallell paths)</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};
export default ArchiveLayout;
