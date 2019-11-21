import React from "react";
import logo from "./logo.png";

function Footer(props) {
return (
<div className="footer">
  <p className="text1">hfsn</p>
  <img src={logo} alt="logo" className="img"/>
  {props.text}
  </div>
  );
}
export default Footer;