import { createBrowserRouter } from "react-router";

import Layout from "./Layout";
import SBESMeasurement from "./components/SBESMeasurement";
import MBESMeasurement from "./components/MBESMeasurement";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <SBESMeasurement /> },
			{ path: "mbes", element: <MBESMeasurement /> },
		],
	},
]);
