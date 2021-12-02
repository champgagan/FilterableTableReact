import FilterInputBox from "./FilterInputBox";
import TableLayout from "./TableLayout";
import { useState } from "react";

export default function FilterableTable({ userdata }) {
  const [filterCriteria, setFilterCriteria] = useState("");
  return (
    <>
      <FilterInputBox
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
      />
      <TableLayout filterText={filterCriteria} tableData={userdata} />
    </>
  );
}
