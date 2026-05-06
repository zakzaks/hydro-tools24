import DepthMeasurement from "./components/DepthMeasurement";

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-100 to-blue-50">
			<main className="flex-1">
				<DepthMeasurement />
			</main>
			<footer className="py-4 text-center text-sm text-gray-400">
				&copy; 2026 DIKSPESPA HIDROS 2026. All rights reserved.
			</footer>
		</div>
	);
}

export default App;
