import React from 'react'
import './Style.css';
import data from "../../../data/data.json"
import MessageCard from '../MessageCard/MessageCard';
function Messages() {
  return (
    <div className="main_page_right_messages">
      <h3 className="section_title">Messages</h3>
      <div className="all_messages">
        {data.messages.map((message, index) => (
          <MessageCard
            key={index}
            dp={message.dp}
            name={message.name}
            message={message.messages}
          />
        ))}
      </div>
    </div>
  );
}

export default Messages