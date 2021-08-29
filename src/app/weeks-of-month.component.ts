import { Component, Input } from '@angular/core';
import { DaysOfMonth } from '@app/days-of-month.type';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';


@Component({
	selector: 'weeks-of-month',
	template: `
		<div class="week-block" *ngFor="let week of weeks">
			<div class="day-square" *ngFor="let day of week">{{day}}</div>
		</div>
	`
})
export class WeeksOfMonthComponent {

	@Input() set days(dys: DaysOfMonth) {
		this.weeks = getArrFilled(
			getRoundedUp(dys.length / 7),
			// @ts-ignore
			(i) => getPage(i+1, 7, dys)
		);
	}


	weeks: DaysOfMonth[] = [];

}
