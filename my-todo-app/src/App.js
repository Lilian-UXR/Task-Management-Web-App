import Home from "./Components/Home.jsx";
import ToDo from "./Components/todo.jsx";
import ContactForm from "./Components/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
            <li>
              <Link to="/contact">Contact Form</Link>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
