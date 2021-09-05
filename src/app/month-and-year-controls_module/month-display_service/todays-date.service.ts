import { MonthNamesData as monthNames } from '../month-names.data';


export class TodaysDateService {

	private static __todaysDate = new Date();  // sets to browser's local time.


	static get(): { day: number, month: string, year: number } {
		return {
			year: this.__todaysDate.getFullYear(),
			month: monthNames.data[this.__todaysDate.getMonth()],
			day: this.__todaysDate.getDay()
		};
	}

}