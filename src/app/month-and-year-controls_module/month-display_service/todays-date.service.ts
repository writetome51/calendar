import { CalendarData as display } from '@app/calendar.data';


export class TodaysDateService {

	private static __todaysDate = new Date();  // sets to browser's local time.


	static get(): { day: number, month: string, year: number } {
		return {
			year: this.__todaysDate.getFullYear(),
			month: display.monthNames[this.__todaysDate.getMonth()],
			day: this.__todaysDate.getDay()
		};
	}

}
