import { useActionState } from "react";
import { formatTime } from "../lib/date-converter";
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

export default function DepthMeasurement() {
	const [results, formAction] = useActionState(calculateAction, null);

	return (
		<section className="p-5">
			<h2>Perhitungan lajur survei menggunakan Single Beam Echo Sounder</h2>
			<form action={formAction}>
				<div className="flex flex-col gap-4">
					<FormField label="Panjang area" name="areaHeight" />
					<FormField label="Lebar area" name="areaWidth" />
					<FormField
						label="Skala peta (masukkan hanya angka perbandingannya, misalnya 1:1000 maka masukkan 1000)"
						name="chartScaleDenominator"
					/>
					<FormField label="Kecepatan kapal (knot)" name="vesselSpeed" />
					<FormField label="Waktu survei setiap hari (jam)" name="surveyTime" />
					<FormField label="Menit per putaran" name="minutesPerTurn" />
				</div>
				<button type="submit" className="border-3 m-3">
					Calculate
				</button>
			</form>

			{results && (
				<div>
					<p>Main lines spacing {results.mainLineSpacing} m</p>
					<p>Cross lines spacing {results.crossLineSpacing} m</p>
					<p>Number of cross lines {results.numberOfCrossLines}</p>
					<p>Number of main lines {results.numberOfMainLines}</p>
					<p>Total survey distance {results.totalDistance / 1000} km</p>
					<p>Total turn time {formatTime(results.totalTurnTime * 3600)}</p>
					<p>Total survey time {formatTime(results.totalSurveyTime * 3600)}</p>
					<p>Total days {formatTime(results.totalDays * 3600)}</p>
				</div>
			)}
		</section>
	);
}
