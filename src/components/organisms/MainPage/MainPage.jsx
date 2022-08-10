import React from "react";
import "./Style.css";
import {NewTask, Summary} from "../../molecules"
import Messages from "../../molecules/Messages/Messages";
import TaskList from "../../molecules/AllTasks/TaskList";
function MainPage() {
  return (
    <main>
      <div className="main_page_left">
        <Summary />
        <div className="main_page_task_done"></div>
        <TaskList />
      </div>

      <div className="main_page_right">
        <h3 id="main_page_right_title" className="section_title ">
          Today’s Schedule
        </h3>
        <NewTask />
        <Messages />
      </div>
    </main>
  );
}

export default MainPage;
