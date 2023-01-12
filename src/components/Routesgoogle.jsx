import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routesgoogle = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        {["search", "imagesearch"].map((path) => (
          <Route
            path={path}
            // path={["search", "images", "news", "videos"].flat()} array path is no longer use in version 6
            element={<Results />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Routesgoogle;
