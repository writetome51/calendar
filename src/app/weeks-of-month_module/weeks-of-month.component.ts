import { Component, Input } from '@angular/core';
import { DaysOfMonth } from '@app/shared/days-of-month.type';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';


@Component({
	selector: 'weeks-of-month',
	template: `
		<week-block *ngFor="let week of weeks">
			<day-of-month *ngFor="let day of week" [label]="day"></day-of-month>
		</week-block>
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
