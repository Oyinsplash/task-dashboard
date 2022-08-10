import React from 'react'
import "./Style.css"
import Chris from "../../../assets/images/chris.png"
function MessageCard({dp, name, message}) {
  return (
    <div className="message_card_wrapper">
      <div className="message_card_left">
        <img src={Chris} alt="" />
      </div>
      <div className="message_card_right">
        <h5 className="message_card_name">{name}</h5>
        <p className="message_card_message">{message} </p>
      </div>
    </div>
  );
}

export default MessageCard