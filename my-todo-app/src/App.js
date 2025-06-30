import Home from "./Components/Home.jsx";
import ToDo from "./Components/todo.jsx";
import ContactForm from "./Components/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import House from "./images/House.png";
import Contact from "./images/Contact.png";
import ToDoList from "./images/To Do List.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="screen">
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
                    <p>Contact Form</p>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
