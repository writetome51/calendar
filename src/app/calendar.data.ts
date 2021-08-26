import { DaysOfMonth } from './days-of-month.type';


export class CalendarData {

	// We're using January 1, 1004 A.D. as frame of reference.
	// It was a Sunday (weekday index 0).
	static readonly startYear = 1004;

	static readonly monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	static selectedMonth = '';

	static daysOfMonth: DaysOfMonth = [];

	static selectedYear: number;

}
