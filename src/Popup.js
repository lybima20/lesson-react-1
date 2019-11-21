import React from "react";
import Follow from "./Follow";
import avatar from "./avatar.png";

function Pop(props) {
  console.log(props);
  return (
    <div className="pop">
      <p>Vika Zakordonets Profile</p>
      <img src={avatar} alt="avatar" className="img"/>

      <Follow count="Following" />
      {props.text}
      {props.count}

    </div>
  );
}
export default Pop;
