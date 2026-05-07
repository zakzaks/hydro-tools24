export function formula(
	chartScaleDenominator,
	areaHeight,
	areaWidth,
	vesselSpeed,
	surveyTime,
	minutesPerTurn,
) {
	// Rule 1: main line spacing (Sm) = chartScaleDenominator/100 the results is in meter
	const mainLineSpacing = chartScaleDenominator / 100;
	// Rule 2: cross line spacing (Sc) = main line spacing x 10
	const crossLineSpacing = mainLineSpacing * 15;
	// Rule 3: number of main lines = area dimension / line spacing
	const numberOfMainLines = Math.ceil(areaHeight / mainLineSpacing) + 1;
	// Rule 4: number of cross lines = area dimension / line spacing
	const numberOfCrossLines = Math.ceil(areaHeight / crossLineSpacing);
	// Rule 5: Total lines = number of main lines + number of cross lines
	const totalLines = numberOfCrossLines + numberOfMainLines;
	// Rule 6: total distance = Number of tracks x Spacing (main line and cross line)
	const totalDistance =
		numberOfMainLines * areaWidth + numberOfCrossLines * areaHeight;
	// Rule 7: Converting vessel speed from knots to Km/h = vesselSpeed x 1.852 and calculate total active survey time = total distance / vessel speed and got the result in hours
	const totalDistanceInMile = totalDistance / 1000 / 1.852;
	const totalActiveSurveyTime = totalDistanceInMile / vesselSpeed;
	// Rule 8: Total turn time = (Total lines-1 x minutes per turn)/60, assuming minutes per turn is 5 minutes
	const totalTurnTime = ((totalLines - 1) * minutesPerTurn) / 60;
	// Rule 9: Total survey time = Total active survey time + Total turn time
	const totalSurveyTime = totalActiveSurveyTime + totalTurnTime;
	// Rule 9: Total days = (Total active survey time + Total turn time)/daily survey time
	const totalDays = totalSurveyTime / surveyTime;

	return {
		mainLineSpacing,
		crossLineSpacing,
		numberOfMainLines,
		numberOfCrossLines,
		totalDistance,
		totalTurnTime,
		totalSurveyTime,
		totalDays,
		surveyTime,
	};
}
