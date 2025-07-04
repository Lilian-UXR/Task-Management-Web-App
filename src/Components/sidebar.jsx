import { Link } from "react-router-dom";
import House from "../images/House.png";
import Contact from "../images/Contact.png";
import ToDoList from "../images/To Do List.png";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <div className="nav-link">
              <img src={House} alt="house icon" /> <p>Home</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/todo">
            <div className="nav-link">
              <img src={ToDoList} alt="to do icon" />
              <p>To Do</p>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">
            <div className="nav-link">
              <img src={Contact} alt="contact icon" />
              <p>Contact</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
