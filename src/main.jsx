import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GigExpertApp from "./GigExpertApp";

import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GigExpertApp></GigExpertApp>
  </StrictMode>
);
