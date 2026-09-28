import React from "react";
import { createRoot } from "react-dom/client";
import GuadalupePlan from "./GuadalupePlan";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GuadalupePlan />
  </React.StrictMode>
);
