import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SchedulesProvider } from "./providers/SchedulesList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SchedulesProvider>

  <BrowserRouter>
    <React.StrictMode>
    
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </SchedulesProvider>
);
