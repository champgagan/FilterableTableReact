export default function FilterInputBox({ filterCriteria, setFilterCriteria }) {
  return (
    <div className="filter-box">
      <label htmlFor="filter">Filter</label> &nbsp;
      <input
        className="input"
        type="textbox"
        id="filter"
        value={filterCriteria}
        onChange={(e) => setFilterCriteria(e.target.value)}
        placeholder="search from the below data"
      />
    </div>
  );
}
