import Home from "./Components/Home.jsx";
import ToDo from "./Components/todo.jsx";
import ContactForm from "./Components/contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/sidebar.jsx";
import Hamburger from "./Components/hamburger.jsx";
import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Router>
        <div className="screen">
          <Hamburger />
          <Sidebar />
          <div className="main">
            <h2>Hello! Let's get working today.</h2>
            <TaskContext value={{ tasks, setTasks }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
            </TaskContext>
          </div>
        </div>
      </Router>
    </div>
  );
}
