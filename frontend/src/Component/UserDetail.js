import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { Button, Paper, Typography } from "@mui/material";
// import { Paper } from '@mui/material';
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { darken, lighten, styled } from '@mui/material/styles';
import { useDemoData } from '@mui/x-data-grid-generator';



const UserDetails = () => {
  const [user, setUser] = useState([]);

  // Getting data from API
  const getUser = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  
  const Approval = (params) => {
    
      window.confirm("*Are you sure you want to Approve the application?");

      console.log("params",params);
      console.log( "params.row.status",params.row.status);
      console.log("params.row._id",params.row._id);
      const id = params.row._id;
      console.log("Id",id);
      axios
        .post(`http://localhost:8000/users/update/${params.row._id}`, {
          status:"Approved",
        })
        .then(() => {
          axios
            .get("http://localhost:8000/users")
            .then((result) => {
              console.log(result.data);
              setUser(result.data);
            })
            .catch((error) => {
              console.log(error);
            });
        });
    
  };

  const Rejection = (params) => {
    
      window.confirm("*Are you sure you want to Reject the application?");

      axios
      .post(`http://localhost:8000/users/update/${params.row._id}`, {
        status: "Rejected",
      })
      .then(() => {
        axios
          .get("http://localhost:8000/users")
          .then((result) => {
            console.log(result.data);
            setUser(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }); 
    
  };
  // columns name
  const columns  = [
    
    {
      field: "FirstName",
      headerName: "First Name",
      headerClassName: 'super-app-theme--headerName',
      width: 100,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "LastName",
      headerName: "Last Name",
      headerClassName: 'super-app-theme--headerName',
      headerAlign: "center",
      width: 100,
      align: "center",
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      headerClassName: 'super-app-theme--headerName',
      sortable: false,
      headerAlign: "center",
      align: "center",
      width: 130,
      valueGetter: (params) =>
        `${params.row.FirstName || ""} ${params.row.LastName || ""}`,
    },

    {
      field: "Email",
      headerName: "Email",
      headerClassName: 'super-app-theme--headerName',
      type: "String",
      headerAlign: "center",
      align: "center",
      width: 170,
    },

    {
      field: "MPhone",
      headerName: "Mobile Number",
      headerClassName: 'super-app-theme--headerName',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "SSN",
      headerName: "SSN",
      type: "String",
      headerAlign: "center",
      headerClassName: 'super-app-theme--headerName',
      align: "center",
      width: 130,
    },
    {
      field: "LoanAmount",
      headerName: "Loan Amount($)",
      headerAlign: "center",
      headerClassName: 'super-app-theme--headerName',
      align: "center",
      type: "number",
      width: 130,
    },
    {
      field: "LoanPurpose",
      headerName: "Loan Purpose",
      headerClassName: 'super-app-theme--headerName',
      headerAlign: "center",
      align: "center",
      type: "number",
      width: 250,
    },
    {
      field: "Status",
      headerName: "Status",
      headerClassName: 'super-app-theme--headerName',
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params.row.status !== "Pending") {
          return (
            params.row.status
          );
        } else {
          return (
            <>
              <Button
                variant="contained"
                color="success"
                size="small"
                startIcon={<CheckIcon />}
                onClick={() => {
                 Approval(params)
                }}
              >
                Approve
              </Button>
              <br/>
              <Button
                variant="contained"
                color="error"
                size="small"
                startIcon={<ClearIcon />}
                onClick={() => {
                  Rejection(params)
                }}
              >
                Reject
              </Button>
            </>
          );
        }
      },
    },
  ];

  const getBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

  const getSelectedBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);



  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({

    '& .super-app-theme--Rejected': {
      backgroundColor: getBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
    },
    '& .super-app-theme--Approved': {
      backgroundColor: getBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
    }
    }
  ))
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    );
  }
  
    const { data, loading } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 4,
      maxColumns: 6,
    })
  return (
    <div>
      <Typography variant="h4" mx={2} my={2} align="center">
        User Details
      </Typography>
      <Paper>
        <Box sx={{ height: 500, width: "100%" }} justifyItems="center">
        <StyledDataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          '& .super-app-theme--headerName': {
            backgroundColor: 'rgba(171, 183, 183)',
            
          },
        }}
        rows={user}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        loading={loading}
        slots={{
          toolbar: CustomToolbar,
          toolbar: GridToolbar ,
        }}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
        pageSizeOptions={[50]}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        checkboxSelection
     
        disableRowSelectionOnClick
      />
            
        </Box>
      </Paper>

      <br />

      
    </div>
  );
};
export default UserDetails;
