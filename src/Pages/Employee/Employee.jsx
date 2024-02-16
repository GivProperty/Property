import React from "react";
import EData from "./EData";
import "./Employee.css";
import EmSidebar from "./EmSidebar";

function Employee(props) {
  return (
    <div>
      <div className="emp">
        <div className="sidebar">
          <EmSidebar />
        </div>
        <div className="main">
          <EData />
        </div>
      </div>
    </div>
  );
}

export default Employee;
