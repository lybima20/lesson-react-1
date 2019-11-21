import React from "react";
function Followers(props) {
  return (
    <div className="follower">
      <p>154 <br/>Followers</p>
           {props.count}
    </div>
  );
}
export default Followers;
