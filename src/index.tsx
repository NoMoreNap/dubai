import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
