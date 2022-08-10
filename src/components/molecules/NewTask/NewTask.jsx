import React, { useState } from "react";
import "./Style.css";
import { Input } from "../../atoms";
import data from "../../../data/data.json";
import CollaboratoryCard from "../CollaboratorCard/CollaboratoryCard";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";
function NewTask() {
  const [buttonState, setButtonState] = useState(true);
  return (
    <form>
      <h3 className="section_title">New Task</h3>
      <div className="task_title">
        <label htmlFor="title" className="title">
          Task Title
        </label>
        <Input className="form_input" placeholder="Create new" type="text" />
        <div className="emoji_bar"></div>
      </div>
      <div className="add_collaborators">
        <p className="title">Add Collaborators</p>
        <div className="collaborators">
          {data.collaborators.map((collaborator, index) => (
            <CollaboratoryCard
              style={collaborator.gender}
              name={collaborator.name}
              dp={collaborator.image}
            />
          ))}
          <div className="add_collaborator_btn">
            <p className="add_icon">+</p>
          </div>
          <div className="add_collaborator_next_btn">
            <Next />
          </div>
        </div>
        <div className="add_btn"></div>
        <div className="view_more"></div>
      </div>
      <div className="time_to_complete">
        <p className="title">Time To Complete</p>
        <div className="inputs">
          <Input
            className="form_input"
            type="text"
            placeholder="Start Date"
            // icon={<Search />}
          />
          <Input
            className="form_input"
            type="text"
            placeholder="End Date"
            // onFocus="date"
          />
        </div>
      </div>
      <div className="hours_budgeted">
        <label htmlFor="hours" className="title">
          Hours Budgeted
        </label>
        <Input className="form_input" type="text" placeholder="Enter Hours" />
        <button disabled={buttonState}>Save</button>
      </div>
    </form>
  );
}

export default NewTask;
