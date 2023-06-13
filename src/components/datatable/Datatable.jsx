import "./datatable.scss";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await fetch("https://wedding-production-e6b8.up.railway.app/api/adduser");
      const jsonData = await response.json();
      setData(jsonData.userDetails || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    { field: "guestName", headerName: "Guest Name", width: 100 },
    { field: "guestEmail", headerName: "Email", width: 250 },
    { field: "inviteType", headerName: "Invite Type", width: 150 },
      { field: "createdAt", headerName: "Created Date", width: 200 },
    { field: "updatedAt", headerName: "Last Updated Date", width: 200 },
    {
      field: "guestStatus",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const { value } = params;
        let statusColor = "";
      
        let displayValue = value;
        if (!value) {
          displayValue = "Pending";
          statusColor = "orange";
        } else if (value === "confirmed") {
          statusColor = "green";
        } else {
          statusColor = "red";
        }
      
        return <div className={`statusCell ${statusColor}`}>{displayValue}</div>;
      },
     
    }
   
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
  className="datagrid"
  rows={data}
  columns={columns}
  pageSize={9}
  rowsPerPageOptions={[9]}
  checkboxSelection
  getRowId={(row) => row._id}
/>
    </div>
  );
};

export default Datatable;
