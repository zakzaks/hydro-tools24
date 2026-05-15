import SBESMeasurement from "./components/SBESMeasurement";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-linear-to-br from-slate-100 to-blue-50">
			<main className="flex-1">
				<SBESMeasurement />
			</main>
			<Footer />
		</div>
	);
}

export default App;
