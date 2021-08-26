import { Component } from '@angular/core';
import { CalendarData } from '@app/calendar.data';


@Component({
	selector: 'day-squares',
	template: `<div class="day-square" *ngFor="let day of calendar.daysOfMonth">{{day}}</div>`
})
export class DaySquaresComponent {

	calendar = CalendarData;

}
