import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./containers/Home/Home";
import PhotoDetails from "./containers/PhotoDetails/PhotoDetails";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/photos" />} />
        <Route path="/photos" element={<Home />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>
    </Fragment>
  );
};

export default App;
