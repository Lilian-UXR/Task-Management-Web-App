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
                <img src={House} alt="house icon" />
                <Link to="/">Home</Link>
              </li>
              <li>
                <img src={ToDoList} alt="to do icon" />
                <Link to="/todo">To Do</Link>
              </li>
              <li>
                <img src={Contact} alt="contact icon" />
                <Link to="/contact">Contact Form</Link>
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
