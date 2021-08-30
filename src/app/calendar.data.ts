import { DaysOfMonth } from './days-of-month.type';


export class CalendarData {

	static readonly monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	static selectedMonth = '';

	static daysOfMonth: DaysOfMonth = [];

	static selectedYear: number;

}
