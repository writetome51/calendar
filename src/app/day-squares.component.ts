import { Component } from '@angular/core';
import { DisplayData } from '@app/data/display.data';


@Component({
	selector: 'day-squares',
	template: `<div class="day-square" *ngFor="let day of display.days">{{day}}</div>`
})
export class DaySquaresComponent {

	display = DisplayData;

}
