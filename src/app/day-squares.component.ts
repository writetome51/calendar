import { Component } from '@angular/core';
import { DisplayData } from '@app/display.data';


@Component({
	selector: 'day-squares',
	template: `<div class="day-square" *ngFor="let day of displayData.days">{{day}}</div>`
})
export class DaySquaresComponent {

	displayData = DisplayData;

}
