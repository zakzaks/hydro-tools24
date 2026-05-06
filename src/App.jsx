import DepthMeasurement from "./components/DepthMeasurement";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-linear-to-br from-slate-100 to-blue-50">
			<main className="flex-1">
				<DepthMeasurement />
			</main>
			<Footer />
		</div>
	);
}

export default App;
