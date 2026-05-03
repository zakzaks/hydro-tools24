export default function DepthMeasurement() {
	return (
		<section>
			<p>
				Rule 1: main line spacing (Sm) = chartScaleDenominator/100 the results
				is in meter
			</p>
			<p> Rule 2: cross line spacing (Sc) = Sm x 10</p>
			<p> Rule 3: Number of tracks =(distance to cover / spacing) +1</p>
			<p>
				Rule 4 : total length = Number of tracks x Spacing (main line and cross
				line)
			</p>
			<div className="flex flex-col gap-4 ">
				<label htmlFor="areaHeight">Area Height</label>
				<input className="border border-black" type="text" name="areaHeight" />
			</div>
			<div className="flex flex-col gap-4 ">
				<label htmlFor="areaWidth">Area Width</label>
				<input className="border border-black" type="text" name="areaWidth" />
			</div>
			<div className="flex flex-col gap-4 ">
				<label htmlFor="chartScale">
					Skala peta (masukkan hanya angka perbandingannya, misalnya 1:1000 maka
					masukkan 1000)
				</label>
				<input
					className="border border-black"
					type="text"
					name="chartScaleDenominator"
				/>
			</div>
			<div className="flex flex-col gap-4 ">
				<label htmlFor="vesselSpeed">Vessel speed (knots)</label>
				<input className="border border-black" type="text" name="vesselSpeed" />
			</div>
			<div className="flex flex-col gap-4 ">
				<label htmlFor="surveyTime">Survey time each day (hours)</label>
				<input className="border border-black" type="text" name="surveyTime" />
			</div>

			<div>
				<label htmlFor="mainLineSpacing">Main Line Spacing</label>
				<input
					className="border border-black"
					type="text"
					name="mainLineSpacing"
				/>
			</div>
			<div>
				<label htmlFor="crossLineSpacing">Cross Line Spacing</label>
				<input
					className="border border-black"
					type="text"
					name="crossLineSpacing"
				/>
			</div>
			<div>
				<label htmlFor="numberOfMainLines">Number of main lines</label>
				<input
					className="border border-black"
					type="text"
					name="numberOfMainLines"
				/>
			</div>
			<p>Convertinng vessel speed from knots to Km/h = vesselSpeed x 1.852</p>
			<p>Total active survey time = Total Distance / Vessel Speed</p>
			<p>Total turn time = (Total lines-1 x minutes per turn)/60</p>
			<p>
				Total survey time =( Total active survey time + Total turn time)/daily
				survey time
			</p>
		</section>
	);
}
