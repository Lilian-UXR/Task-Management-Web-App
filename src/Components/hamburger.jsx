import React, { useState } from "react";
import HamburgerIcon from "../images/Hamburger.png";
import { Link } from "react-router-dom";
import House from "../images/House.png";
import Contact from "../images/Contact.png";
import ToDoList from "../images/To Do List.png";

function Hamburger() {
  const [isOpen, setisOpen] = useState(false);

  function handleOpen() {
    setisOpen((prev) => !prev);
  }

  return (
    <nav className="mobile">
      <div className="mobile-wrapper">
        <img src={HamburgerIcon} onClick={handleOpen} alt="hamburger menu" />
        {isOpen && (
          <ul className="dropdown">
            <li>
              <Link to="/">
                <div className="mobile-link" onClick={handleOpen}>
                  <img src={House} alt="house icon" />
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <div className="mobile-link" onClick={handleOpen}>
                  <img src={ToDoList} alt="to do icon" />
                  <p>To Do</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="mobile-link" onClick={handleOpen}>
                  <img src={Contact} alt="contact icon" />
                  <p>Contact</p>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Hamburger;
