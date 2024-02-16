import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../Common/axios";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";

const columns = [
  // { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  { field: "number", headerName: "Phone", width: 130 },
  {
    field: "createdAt",
    headerName: "Time",
    width: 170,
    valueGetter: (params) =>
      format(new Date(params.row.createdAt), "yyyy-MM-dd HH:mm:ss"),
  },
  { field: "message", headerName: "Message", width: 250 },
];

function EData(props) {
  const path = useLocation().pathname;
  const title = () => {
    if (path === "/employee/dashboard") return "ALL USERS";
    if (path === "/employee/dashboard/query") return "Query USERS";
    if (path === "/employee/dashboard/north") return "NORTH USERS";
    if (path === "/employee/dashboard/south") return "SOUTH USERS";
    if (path === "/employee/dashboard/east") return "EAST USERS";
    if (path === "/employee/dashboard/west") return "WEST USERS";
    if (path === "/employee/dashboard/central") return "CENTRAL USERS";
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/getAllUsers");
      setUsers(res.data);
    };
    fetchUsers();
  }, [users]);

  return (
    <div>
      <div className="heading">
        <h2>{title()}</h2>
      </div>
      <div className="table">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default EData;
