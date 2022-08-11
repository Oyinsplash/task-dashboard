import React from "react";
import { Table } from "../../atoms";
import Select from "../Select/Select";
import "./Style.css"
function TaskList({state}) {
  return (
    <div className="main_page_task_list">
      <div className="main_page_task_list_top">
        <h2 className="main_page_left_title">Tasks</h2>
        <Select />
      </div>
      <div className="main_page_task_list_table">
        <Table state={ state} />
      </div>
    </div>
  );
}

export default TaskList;
