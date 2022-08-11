import React from 'react'

const Chat = ({fill}) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.183 6.00798L4.19105 0.227983C3.66163 0.00876957 3.08052 -0.0540727 2.51651 0.0468957C1.9525 0.147864 1.42922 0.408415 1.00861 0.797703C0.587999 1.18699 0.287673 1.68871 0.143187 2.24348C-0.00129992 2.79824 0.0161035 3.38281 0.193336 3.92798L1.73246 8.77798L0.153359 13.628C-0.028665 14.1753 -0.0491122 14.7636 0.0944673 15.3223C0.238047 15.881 0.539564 16.3864 0.962896 16.778C1.50722 17.283 2.21946 17.5681 2.96175 17.578C3.35626 17.5777 3.74683 17.4996 4.11109 17.348L18.1531 11.568C18.6999 11.3404 19.1672 10.9559 19.4959 10.4629C19.8246 9.96994 20 9.3906 20 8.79798C20 8.20537 19.8246 7.62603 19.4959 7.13305C19.1672 6.64007 18.6999 6.25555 18.1531 6.02798L18.183 6.00798ZM3.38151 15.478C3.20521 15.5507 3.01179 15.5715 2.82407 15.5379C2.63635 15.5042 2.46218 15.4175 2.32212 15.288C2.19018 15.1618 2.09528 15.0019 2.04771 14.8257C2.00014 14.6494 2.00172 14.4634 2.05227 14.288L3.51144 9.77798L17.2336 9.77798L3.38151 15.478ZM3.51144 7.77798L2.02229 3.30798C1.97174 3.13253 1.97016 2.94658 2.01773 2.7703C2.0653 2.59402 2.1602 2.43413 2.29213 2.30798C2.38619 2.20926 2.49943 2.13083 2.6249 2.07752C2.75037 2.02421 2.88541 1.99714 3.02172 1.99798C3.15569 1.99824 3.28824 2.02545 3.41149 2.07798L17.2336 7.77798L3.51144 7.77798Z"
        fill={fill}
      />
    </svg>
  );
}

export default Chat