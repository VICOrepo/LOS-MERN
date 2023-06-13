import { Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <div>
      <Typography
        variant="h2"
        mx={2}
        my={2}
        align="center"
        sx={{
          margin: "150px",

          fontFamily: "monospace",
        }}
      >
        LOAN ORIGINATION SYSTEM
      </Typography>
    </div>
  );
}

export default Home;
