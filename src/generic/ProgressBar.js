import React from "react";

const ProgressBar = props => {
  return (
    <div className="progress">
      <div className="determinate" style={{ width: props.bar }} />
    </div>
  );
};

export default ProgressBar;
