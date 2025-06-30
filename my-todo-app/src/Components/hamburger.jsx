import React, { useState } from "react";
import HamburgerIcon from "../images/Hamburger.png";

function Hamburger() {
  return (
    <nav className="mobile">
      <img src={HamburgerIcon} alt="hamburger menu" />
    </nav>
  );
}

export default Hamburger;
