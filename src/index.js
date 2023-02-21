import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Media Query Matched!");
  }
}
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
