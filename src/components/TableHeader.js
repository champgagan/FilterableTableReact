import React from "react";
function TableHeader({ headers }) {
  return (
    <tr className="header">
      {headers.map((name) => {
        return <th key={name}>{name}</th>;
      })}
    </tr>
  );
}

export default React.memo(TableHeader);
