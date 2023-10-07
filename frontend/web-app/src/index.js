import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./input.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BaseUrlProvider } from "./context/BaseUrlContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<BaseUrlProvider>
				<App />
			</BaseUrlProvider>
		</BrowserRouter>
	</React.StrictMode>
);
