import Home from "./Components/Home.jsx";
import ToDo from "./Components/todo.jsx";
import ContactForm from "./Components/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/todo">To Do</Link>
            <Link to="/contact">Contact Form</Link>
          </li>
        </ul>
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
