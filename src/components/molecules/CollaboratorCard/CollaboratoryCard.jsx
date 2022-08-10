import React from "react";
import Close from "../../../assets/icons/close";
import "./Style.css";
import Angela from "../../../assets/images/angela_dp.png";
function CollaboratoryCard({ style, name, dp }) {
  return (
    <div className={`collaborator_card_wrapper collaborator_${style}`}>
      <div className="collaborator_card_left">
        <img src={Angela} alt={name} />
        <p className="name">{name}</p>
      </div>
      <div className="close_btn">
        <Close />
      </div>
    </div>
  );
}

export default CollaboratoryCard;
