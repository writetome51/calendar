import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `<div class="day-name" *ngFor="let dayname in dayNames"> {{dayname}} </div>`
})
export class DayNamesComponent {

	readonly dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

}
