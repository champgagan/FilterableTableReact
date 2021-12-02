import React from "react";
import TableHeader from "./TableHeader";
import { searchResult } from "./../utils/util";
import { useMemo } from "react";

function TableLayout({ filterText, tableData }) {
  const headersArray = useMemo(() => {
    return [
      "Name",
      "Username",
      "Email",
      "Address",
      "Phone",
      "Website",
      "Company",
    ];
  }, []);

  const filteredResults = (filterText, tableData) => {
    const copyOriginal = [...tableData];
    const lowercaseText = filterText.toLowerCase();
    return copyOriginal.filter((data) => {
      return searchResult(lowercaseText, data);
    });
  };

  return (
    <React.Fragment>
      <table id="myTable">
        <TableHeader headers={headersArray} />
        {tableData &&
          tableData.length > 0 &&
          filteredResults(filterText, tableData).map((data) => {
            return (
              <tr key={data.id}>
                <td>{data?.name}</td>
                <td>{data?.username}</td>
                <td>{data?.email}</td>
                <td>
                  {data &&
                    data.address &&
                    `${data.address?.suite} ${data.address?.street} ${data.address?.city} ${data.address?.zipcode}`}
                </td>
                <td>{data?.phone}</td>
                <td>{data?.website}</td>
                <td>
                  {data &&
                    data.company &&
                    `${data.company?.name} ${data.company?.catchPhrase} ${data.company?.bs}`}
                </td>
              </tr>
            );
          })}
      </table>
    </React.Fragment>
  );
}

export default TableLayout;
