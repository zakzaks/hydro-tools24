import { useActionState, useState } from "react";

export default function DepthMeasurement() {
	const [mainLineSpacing, setMainLineSpacing] = useState(0);
	const [crossLineSpacing, setCrossLineSpacing] = useState(0);
	const [numberOfCrossLines, setNumberOfCrossLines] = useState(0);
	const [numberOfMainLines, setNumberOfMainLines] = useState(0);
	const [totalActiveSurveyTime, setTotalActiveSurveyTime] = useState(0);
	const [totalSurveyTime, setTotalSurveyTime] = useState(0);
	const [totalTurnTime, setTotalTurnTime] = useState(0);
	const [totalSurveyDistance, setTotalSurveyDistance] = useState(0);

	function calculateAction(prevState, formData) {
		const areaHeight = parseFloat(formData.get("areaHeight"));
		const areaWidth = parseFloat(formData.get("areaWidth"));
		const chartScaleDenominator = parseFloat(
			formData.get("chartScaleDenominator"),
		);
		const vesselSpeed = parseFloat(formData.get("vesselSpeed"));
		const surveyTime = parseFloat(formData.get("surveyTime"));

		const newMainLineSpacing = chartScaleDenominator / 100;
		const newCrossLineSpacing = newMainLineSpacing * 10;
		const newNumberOfCrossLines =
			Math.ceil(areaWidth / newCrossLineSpacing) + 1;
		const newNumberOfMainLines = Math.ceil(areaHeight / newMainLineSpacing) + 1;
		const totalLines = newNumberOfCrossLines + newNumberOfMainLines;
		const totalDistance =
			newNumberOfMainLines * areaWidth + newNumberOfCrossLines * areaHeight;
		const newTotalSurveyTime = totalDistance / (vesselSpeed * 1.852);
		const minutesPerTurn = 5;

		setMainLineSpacing(newMainLineSpacing);
		setCrossLineSpacing(newCrossLineSpacing);
		setNumberOfCrossLines(newNumberOfCrossLines);
		setNumberOfMainLines(newNumberOfMainLines);
		setTotalSurveyTime(newTotalSurveyTime);
		setTotalTurnTime(((totalLines - 1) * minutesPerTurn) / 60);
		setTotalSurveyDistance(totalDistance);
		setTotalActiveSurveyTime(
			newTotalSurveyTime - ((totalLines - 1) * minutesPerTurn) / 60,
		);
	}

	const [formState, formAction] = useActionState(calculateAction);

	return (
		<section>
			<form action={formAction}>
				<p>
					Rule 1: main line spacing (Sm) = chartScaleDenominator/100 the results
					is in meter
				</p>
				<p> Rule 2: cross line spacing (Sc) = Sm x 10</p>
				<p> Rule 3: Number of tracks =(distance to cover / spacing) +1</p>
				<p>
					Rule 4 : total length = Number of tracks x Spacing (main line and
					cross line)
				</p>
				<div className="flex flex-col gap-4 ">
					<label htmlFor="areaHeight">Area Height</label>
					<input
						className="border border-black"
						type="text"
						name="areaHeight"
					/>
				</div>
				<div className="flex flex-col gap-4 ">
					<label htmlFor="areaWidth">Area Width</label>
					<input className="border border-black" type="text" name="areaWidth" />
				</div>
				<div className="flex flex-col gap-4 ">
					<label htmlFor="chartScale">
						Skala peta (masukkan hanya angka perbandingannya, misalnya 1:1000
						maka masukkan 1000)
					</label>
					<input
						className="border border-black"
						type="text"
						name="chartScaleDenominator"
					/>
				</div>
				<div className="flex flex-col gap-4 ">
					<label htmlFor="vesselSpeed">Vessel speed (knots)</label>
					<input
						className="border border-black"
						type="text"
						name="vesselSpeed"
					/>
				</div>
				<div className="flex flex-col gap-4 ">
					<label htmlFor="surveyTime">Survey time each day (hours)</label>
					<input
						className="border border-black"
						type="text"
						name="surveyTime"
					/>
				</div>

				<div>
					<label htmlFor="mainLineSpacing">Main Line Spacing</label>
					<input
						className="border border-black"
						type="text"
						name="mainLineSpacing"
						defaultValue={mainLineSpacing}
					/>
				</div>
				<div>
					<label htmlFor="crossLineSpacing">Cross Line Spacing</label>
					<input
						className="border border-black"
						type="text"
						name="crossLineSpacing"
						defaultValue={crossLineSpacing}
					/>
				</div>
				<div>
					<label htmlFor="numberOfCrossLines">Number of cross lines</label>
					<input
						className="border border-black"
						type="text"
						name="numberOfCrossLines"
						defaultValue={numberOfCrossLines}
					/>
				</div>
				<div>
					<label htmlFor="numberOfMainLines">Number of main lines</label>
					<input
						className="border border-black"
						type="text"
						name="numberOfMainLines"
						defaultValue={numberOfMainLines}
					/>
				</div>
				<div>
					<label htmlFor="totalSurveyDistance">Total survey distance</label>
					<input
						className="border border-black"
						type="text"
						name="totalSurveyDistance"
						defaultValue={totalSurveyDistance}
					/>
				</div>
				<div>
					<label htmlFor="totalActiveSurveyTime">
						Total active survey time
					</label>
					<input
						className="border border-black"
						type="text"
						name="totalActiveSurveyTime"
						defaultValue={totalActiveSurveyTime}
					/>
				</div>
				<div>
					<label htmlFor="totalTurnTime">Total turn time</label>
					<input
						className="border border-black"
						type="text"
						name="totalTurnTime"
						defaultValue={totalTurnTime}
					/>
				</div>
				<div>
					<label htmlFor="totalSurveyTime">Total survey time</label>
					<input
						className="border border-black"
						type="text"
						name="totalSurveyTime"
						defaultValue={totalSurveyTime}
					/>
				</div>
				<p>Convertinng vessel speed from knots to Km/h = vesselSpeed x 1.852</p>
				<p>Total active survey time = Total Distance / Vessel Speed</p>
				<p>Total turn time = (Total lines-1 x minutes per turn)/60</p>
				<p>
					Total survey time =( Total active survey time + Total turn time)/daily
					survey time
				</p>
				<button type="submit">Calculate</button>
			</form>
		</section>
	);
}
