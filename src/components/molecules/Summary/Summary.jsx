import React from "react";
import SummaryCard from "../SummaryCard/SummaryCard";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";
import { ReactComponent as GreenLine } from "../../../assets/icons/greenline.svg";
import { ReactComponent as RedLine } from "../../../assets/icons/redline.svg";
import { ReactComponent as GoldLine } from "../../../assets/icons/goldline.svg";

function Summary() {
  return (
    <div className="main_page_summary">
      <SummaryCard
        icon={<Star />}
        title="Task Completed"
        count="08"
        chartIcon={<GreenLine />}
        summaryCount="10"
        summary="from last week"
      />
      <SummaryCard
        icon={<Star />}
        title="New Task "
        count="10"
        chartIcon={<GoldLine />}
        summaryCount="10"
        summary="from last week"
      />
      <SummaryCard
        icon={<Star />}
        title="Project Done"
        count="10"
        chartIcon={<RedLine />}
        summaryCount="08"
        summary="from last week"
      />
    </div>
  );
}

export default Summary;
