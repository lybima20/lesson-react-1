import React from "react";
import github from "./github.svg";


function Button(props) {
return (
<div className="button">
    <img src={github} alt="github" className="git"/>
  {props.text}
  </div>
  );
}
export default Button;