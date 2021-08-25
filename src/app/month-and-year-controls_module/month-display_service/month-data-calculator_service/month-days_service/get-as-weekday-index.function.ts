// Weekday indexes go from 0 to 6.

export function getAsWeekdayIndex(dayIndex): number {
	if (dayIndex > 6) {
		const factor = Math.floor(dayIndex / 7);
		dayIndex -= (7 * factor);
	}
	return dayIndex;
}
