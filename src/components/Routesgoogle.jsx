import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routesgoogle = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/">
          <Navigate to="/search" />
        </Route>
        <Route path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Routes>
    </div>
  );
};

export default Routesgoogle;
