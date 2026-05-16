import { NavLink, Outlet } from "react-router";

import Footer from "./components/Footer";

function Layout() {
	return (
		<div className="flex min-h-screen flex-col bg-linear-to-br from-slate-100 to-blue-50">
			<NavLink
				to="/sbes"
				className={({ isActive }) => (isActive ? "underline" : undefined)}
			>
				SBES Measurement
			</NavLink>
			<NavLink
				to="/mbes"
				className={({ isActive }) => (isActive ? "underline" : undefined)}
			>
				MBES Measurement
			</NavLink>
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
