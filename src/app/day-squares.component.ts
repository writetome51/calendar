import { Component } from '@angular/core';
import { DaysOfSelectedMonthData } from '@app/data/days-of-selected-month.data';


@Component({
	selector: 'day-squares',
	template: `<div class="day-square" *ngFor="let day in daysOfSelectedMonth">{{day}}</div>`
})
export class DaySquaresComponent {

	daysOfSelectedMonth = DaysOfSelectedMonthData;

}
