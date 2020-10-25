import React from "react";
import Label from "../label"
import logo from "../../images/310.png"

function Footer(props) {
  return (
    <footer id="footer">
      <Label classNameValue="footer-freebies" text="365 Freebies. 007/365" />
       <img src={logo} alt="logo" />
      <Label classNameValue="footer-email" text="@anakarenart" />
    </footer>
  );
}

export default Footer