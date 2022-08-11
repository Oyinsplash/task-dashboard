import React, { useEffect } from "react";
import "./Style.css";
import {ReactComponent as TableMenuIcon} from "../../assets/icons/menuIcon.svg"


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
              <td>{data.end}</td>
              <td>{data.hoursBudgeted}</td>
              <td>
                <label for="file">60% complete</label>
                <progress id="file" value="60" max="100">
                  60%
                </progress>
              </td>
              <td>
                <TableMenuIcon />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
