import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AutoProvider } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AutoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AutoProvider>
);
