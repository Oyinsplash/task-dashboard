import React, { useState, useEffect } from "react";
import "./Style.css";
import { Input } from "../../atoms";
import data from "../../../data/data.json";
import CollaboratoryCard from "../CollaboratorCard/CollaboratoryCard";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";

const initialData = {
  title: "",
  start: "",
  end: "",
  hoursBudgeted: "",
};

// dataFromLS ? JSON.parse(dataFromLS)
function NewTask({ state, setState }) {
  // console.log(dataFromLS);
  const [formData, setFormData] = useState(initialData);

  // const [buttonState, setButtonState] = useState(true);
  const toggleBtn = () => {
    if (
      formData.title &&
      formData.start &&
      formData.end &&
      formData.hoursBudgeted
    ) {
      return false;
    } else {
      return true;
    }
  };
  // useEffect(() => {}, [formData]);
  // useEffect(() => {});
  // console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    console.log("befor", formData);
    e.preventDefault();

    const stateCopy = [...state, formData];
    const reset = initialData;
    setState(stateCopy);
    setFormData(reset);

    localStorage.setItem("tasks", JSON.stringify(stateCopy));
    console.log("after", reset);
  };

  return (
    <form onSubmit={handleClick}>
      <h3 className="section_title">New Task</h3>
      <div className="task_title">
        <label htmlFor="title" className="title">
          Task Title
        </label>
        <Input
          className="form_input"
          placeholder="Create new"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
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
              key={index}
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
            name="start"
            value={formData.start}
            onChange={handleChange}
          />
          <Input
            className="form_input"
            type="text"
            placeholder="End Date"
            name="end"
            value={formData.end}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="hours_budgeted">
        <label htmlFor="hours" className="title">
          Hours Budgeted
        </label>
        <Input
          className="form_input"
          type="text"
          placeholder="Enter Hours"
          name="hoursBudgeted"
          value={formData.hoursBudgeted}
          onChange={handleChange}
        />
   
        <button disabled={toggleBtn()} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default NewTask;
