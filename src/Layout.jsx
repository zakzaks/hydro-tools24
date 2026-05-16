import { Link, Outlet } from "react-router";

import Footer from "./components/Footer";

function Layout() {
	return (
		<div className="flex min-h-screen flex-col bg-linear-to-br from-slate-100 to-blue-50">
			<Link to="/">SBES Measurement</Link>
			<Link to="/mbes">MBES Measurement</Link>
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
