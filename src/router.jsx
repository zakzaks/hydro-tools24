import { createBrowserRouter } from "react-router";

import Layout from "./Layout";
import SBESMeasurement from "./components/SBESMeasurement";
import MBESMeasurement from "./components/MBESMeasurement";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "sbes", element: <SBESMeasurement /> },
			{ path: "mbes", element: <MBESMeasurement /> },
		],
	},
]);
