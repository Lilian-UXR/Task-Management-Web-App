import React from "react";
import ToDo from "./todo";
import { useNavigate } from "react-router-dom";
import Contact from "../images/Contact.png";
import ToDoList from "../images/To Do List.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* fragment tag since in react you can only return one element */}
      <div className="recent">
        <p>Recent</p>
        <div className="btnwrap">
          <button className="recentbtn" onClick={() => navigate("/todo")}>
            <img src={ToDoList} alt="to do icon" />
            <p>To Do</p>
          </button>
          <button className="recentbtn" onClick={() => navigate("/contact")}>
            <img src={Contact} alt="contact icon" />
            <p>Contact</p>
          </button>
        </div>
      </div>
      <ToDo />
    </>
  );
}
