import { Injectable } from '@angular/core';
import { DisplayData as display } from '@app/data/display.data';


@Injectable({providedIn: 'root'})
export class TodaysDateService {

	private __todaysDate = new Date();  // sets to browser's local time.


	get(): { day: number, month: string, year: number } {
		return {
			year: this.__todaysDate.getFullYear(),
			month: display.monthNames[this.__todaysDate.getMonth()],
			day: this.__todaysDate.getDay()
		};
	}

}
