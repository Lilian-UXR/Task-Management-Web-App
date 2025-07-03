import React from "react";
import ToDo from "./todo";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* fragment tag since in react you can only return one element */}
      <div>
        <p>Recent</p>
        <button onClick={() => navigate("/todo")}>To Do</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
      <ToDo />
    </>
  );
}
