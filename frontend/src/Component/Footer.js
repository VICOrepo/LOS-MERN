import React from "react";
// import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SIGMA from "../image/1553666896199.jpeg";

// function Footer() {

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "150px",
//         backgroundColor: "transparent",
//         paddingTop: "1rem",
//         paddingBottom: "1rem",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container direction="column" alignItems="center">
//           <Grid item xs={12}>
//             <Typography color="black" variant="h5">
//               Simga INNOVATION UNLIMITED
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography color="textSecondary" variant="subtitle1">
//               {`${new Date().getFullYear()} | React | Material UI | React Router`}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

function Footer() {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "static",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <img src={SIGMA} width={80} height={70} alt="Logo" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. Sigma Infosolutions. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
