import { Box, Button, Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <Box container justifyContent="center">
        {/* <Button
        component={Link}
        to={"user"}
        variant="contained"
        size="large"
        fullWidth
      >
        User Details
      </Button> */}
      <br/>
      <br/>
      <Typography variant="h4" mx={2} my={2} align="center">
      Form Submitted Successfully !!
      </Typography>
     
      <br />
      
    </Box>
  );
};

export default Successful;
