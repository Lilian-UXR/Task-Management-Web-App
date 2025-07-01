import Home from "./Components/Home.jsx";
import ToDo from "./Components/todo.jsx";
import ContactForm from "./Components/contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/sidebar.jsx";
import Hamburger from "./Components/hamburger.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="screen">
          <Hamburger />
          <Sidebar />
          <div className="main">
            <h2>Hello! Let's get working today.</h2>
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
