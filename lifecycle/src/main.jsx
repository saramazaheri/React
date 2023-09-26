import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use((request) => {
  console.log(`A ${request.method} request sent to ${request.url}`);
  return request;
});

// axios.interceptors.response.use((request) => {
//   console.log(request);
//   return response.data;
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
