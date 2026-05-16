import { createBrowserRouter } from "react-router";

import Layout from "./Layout";
import SBESMeasurement from "./components/SBESMeasurement";
import MBESMeasurement from "./components/MBESMeasurement";
import ErrorPage from "./components/ErrorPage";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "sbes", element: <SBESMeasurement /> },
			{ path: "mbes", element: <MBESMeasurement /> },
		],
	},
]);
