import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import App from "./App.jsx";
import MBESMeasurement from "./components/MBESMeasurement.jsx";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/mbes", element: <MBESMeasurement /> },
]);
const root = document.getElementById("root");

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
