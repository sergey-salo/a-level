import React from "react";

function Label(props) {
  return (
    <div className={props.classNameValue}>
      {props.text}
    </div>
  );
}

export default Label;