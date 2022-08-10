import React from "react";
import "./Style.css";

function SummaryCard({ icon, title, count, chartIcon, summaryCount, summary }) {
  return (
    <div className="card_wrapper">
      <div className="card_top">
        <div className="card_top_left">
          <div className="card_top_icon">{icon}</div>
          <h3 className="title">{title}</h3>
        </div>
        <div className="card_top_right">
          <p className="count">{count}</p>
        </div>
      </div>
      <div className="card_bottom">
        <div className="card_bottom_left">{chartIcon}</div>
        <div className="card_bottom_right">
          <p>
            <span>{summaryCount}+</span> more
          </p>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
