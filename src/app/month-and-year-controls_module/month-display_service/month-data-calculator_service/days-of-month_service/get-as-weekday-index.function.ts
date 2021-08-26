import { WeekdayIndex } from './weekday-index.type';


export function getAsWeekdayIndex(dayIndex): WeekdayIndex {
	if (dayIndex > 6) {
		const factor = Math.floor(dayIndex / 7);
		dayIndex -= (7 * factor);
	}
	return dayIndex;
}
