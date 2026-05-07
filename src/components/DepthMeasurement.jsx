import { useActionState } from "react";
import { formatTime, convertDays } from "../lib/date-converter";
import { formula } from "../lib/depth-measurement-formula";
import FormField from "./FormField";

function calculateAction(_prevState, formData) {
	const areaHeight = parseFloat(formData.get("areaHeight"));
	const areaWidth = parseFloat(formData.get("areaWidth"));
	const chartScaleDenominator = parseFloat(
		formData.get("chartScaleDenominator"),
	);
	const vesselSpeed = parseFloat(formData.get("vesselSpeed"));
	const surveyTime = parseFloat(formData.get("surveyTime"));
	const minutesPerTurn = parseFloat(formData.get("minutesPerTurn"));

	return formula(
		chartScaleDenominator,
		areaHeight,
		areaWidth,
		vesselSpeed,
		surveyTime,
		minutesPerTurn,
	);
}

function ResultCard({ label, value }) {
	return (
		<div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
			<p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
				{label}
			</p>
			<p className="mt-1 text-base font-semibold text-gray-900">{value}</p>
		</div>
	);
}

export default function DepthMeasurement() {
	const [results, formAction] = useActionState(calculateAction, null);

	return (
		<div className="px-4 py-10">
			<div className="mx-auto max-w-2xl">
				{/* Page header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-gray-900">Hydro Tools 24</h1>
					<p className="mt-2 text-gray-500">
						Perhitungan lajur survei menggunakan Single Beam Echo Sounder
					</p>
				</div>

				{/* Form card */}
				<div className="rounded-2xl bg-white p-8 shadow-lg">
					<h2 className="mb-6 text-lg font-semibold text-gray-800">
						Parameter Survei
					</h2>
					<form action={formAction}>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<FormField label="Panjang Area" name="areaHeight" unit="m" />
							<FormField label="Lebar Area" name="areaWidth" unit="m" />
							<FormField label="Skala Peta" name="chartScaleDenominator" />
							<FormField
								label="Kecepatan Kapal"
								name="vesselSpeed"
								unit="knot"
							/>
							<FormField
								label="Waktu Survei per Hari"
								name="surveyTime"
								unit="jam"
							/>
							<FormField
								label="Waktu per Putaran"
								name="minutesPerTurn"
								unit="menit"
							/>
						</div>
						<button
							type="submit"
							className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:bg-blue-800"
						>
							Hitung
						</button>
					</form>
				</div>

				{/* Results card */}
				{results && (
					<div className="mt-6 rounded-2xl bg-white p-8 shadow-lg">
						<h2 className="mb-6 text-lg font-semibold text-gray-800">
							Hasil Perhitungan
						</h2>{" "}
						<h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
							Parameter Input
						</h3>
						<div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
							<ResultCard
								label="Panjang Area"
								value={`${results.areaHeight} m`}
							/>
							<ResultCard label="Lebar Area" value={`${results.areaWidth} m`} />
							<ResultCard
								label="Skala Peta"
								value={`1 : ${results.chartScaleDenominator}`}
							/>
							<ResultCard
								label="Kecepatan Kapal"
								value={`${results.vesselSpeed} knot`}
							/>
							<ResultCard
								label="Waktu Survei per Hari"
								value={`${results.surveyTime} jam`}
							/>
							<ResultCard
								label="Waktu per Putaran"
								value={`${results.minutesPerTurn} menit`}
							/>
						</div>
						<h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
							Hasil
						</h3>{" "}
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<ResultCard
								label="Spasi Lajur Utama"
								value={`${results.mainLineSpacing} m`}
							/>
							<ResultCard
								label="Spasi Lajur Silang"
								value={`${results.crossLineSpacing} m`}
							/>
							<ResultCard
								label="Jumlah Lajur Utama"
								value={results.numberOfMainLines}
							/>
							<ResultCard
								label="Jumlah Lajur Silang"
								value={results.numberOfCrossLines}
							/>
							<ResultCard
								label="Total Jarak Survei"
								value={`${(results.totalDistance / 1000).toFixed(0)} km`}
							/>
							<ResultCard
								label="Total Waktu Putar"
								value={formatTime(results.totalTurnTime * 3600)}
							/>
							<ResultCard
								label="Total Waktu Survei"
								value={formatTime(results.totalSurveyTime * 3600)}
							/>
							<ResultCard
								label="Total Hari"
								value={convertDays(results.totalDays, results.surveyTime)}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
