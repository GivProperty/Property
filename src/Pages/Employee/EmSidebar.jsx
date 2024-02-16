import React from "react";
import { Dashboard, Person } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function EmSidebar(props) {
  const path = useLocation().pathname;

  return (
    <div>
      <div className="heading">
        <h2>EMPLOYEE DASHBOARD</h2>
      </div>
      <div className="main-lists">
        <div className="main-list">
          <div className="title">ALL USERS</div>
          <Link
            to={"/employee/dashboard"}
            className={path === "/employee/dashboard" ? "list active" : "list"}
          >
            <Dashboard />
            <span>Dashboard</span>
          </Link>
        </div>

        <div className="main-list">
          <div className="title">Queries</div>
          <Link
            to={"/employee/dashboard/query"}
            className={
              path === "/employee/dashboard/query" ? "list active" : "list"
            }
          >
            <Person />
            <span>Query Users</span>
          </Link>
        </div>

        <div className="main-list">
          <div className="title">ALL LOCATIONS</div>
          <Link
            to={"/employee/dashboard/north"}
            className={
              path === "/employee/dashboard/north" ? "list active" : "list"
            }
          >
            <div className="icon">
              <p>N</p>
            </div>
            <span>North</span>
          </Link>
          <Link
            to={"/employee/dashboard/south"}
            className={
              path === "/employee/dashboard/south" ? "list active" : "list"
            }
          >
            <div className="icon">
              <p>S</p>
            </div>
            <span>SOUTH</span>
          </Link>
          <Link
            to={"/employee/dashboard/east"}
            className={
              path === "/employee/dashboard/east" ? "list active" : "list"
            }
          >
            <div className="icon">
              <p>E</p>
            </div>
            <span>East</span>
          </Link>
          <Link
            to={"/employee/dashboard/west"}
            className={
              path === "/employee/dashboard/west" ? "list active" : "list"
            }
          >
            <div className="icon">
              <p>W</p>
            </div>
            <span>West</span>
          </Link>
          <Link
            to={"/employee/dashboard/central"}
            className={
              path === "/employee/dashboard/central" ? "list active" : "list"
            }
          >
            <div className="icon">
              <p>C</p>
            </div>
            <span>Central</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmSidebar;
