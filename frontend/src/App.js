import { Box, Container, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import UserDetail from "./Component/UserDetail";
import Home from "./Component/Home";
import Form from "./Component/form";
import Homebtn from "./Component/Homebtn";
import Successful from "./Component/Successful";

function App() {
  return (
    <div>
      <br/>
      <Box>
        <Routes>
          {/* <Route path="btn" element={<Homebtn/>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="user" element={<UserDetail />}></Route>
          <Route path="formSubmitted" element={<Successful />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
