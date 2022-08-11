import React, { useEffect } from "react";
import "./Style.css";

const tableHeaders = [
  "Name Of Task",
  "Start Date",
  "End Date",
  "Hours",
  "Progress",
];
function Table({ state }) {
  useEffect(() => {}, [state]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}

          <th></th>
        </tr>
      </thead>
      <tbody>
        {state?.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.start}</td>
              <td>{data.end}</td> <td>{data.title}</td>{" "}
              <td>{data.hoursBudgeted}</td>
              <td>.</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
