export class GetAsWeekdayIndexService {

	// Weekday indexes go from 0 to 6.

	static go(dayIndex): number {
		if (dayIndex > 6) {
			const factor = Math.floor(dayIndex / 7);
			dayIndex -= (7 * factor);
		}
		return dayIndex;
	}

}
