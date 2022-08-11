import React, { useState } from "react";
import "./Style.css";
import { NewTask, Summary, Messages, TaskList, Chart } from "../../molecules";
const dataFromLS = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
function MainPage() {
  const [state, setState] = useState(dataFromLS);
 
  return (
    <main>
      <div className="main_page_left">
        <Summary />
        <div className="main_page_task_done">
          <div className="main_page_task_done_top">
            <h2 className="main_page_left_title">Tasks Done</h2>
            <div className="main_page_task_done_right">
              <div className="main_page_task_done_toggle" tabindex="0">
                Daily
              </div>
              <div className="main_page_task_done_toggle" tabindex="0">
                Weekly
              </div>
              <div
                className="main_page_task_done_toggle"
                tabindex="0"
                onFocus={true}
              >
                Monthly
              </div>
            </div>
          </div>
          <Chart />
        </div>
        <TaskList state={state} />
      </div>

      <div className="main_page_right">
        <h3 id="main_page_right_title" className="section_title ">
          Today’s Schedule
        </h3>
        <NewTask state={state} setState={setState} />
        <Messages />
      </div>
    </main>
  );
}

export default MainPage;
