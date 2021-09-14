import { Component, Input } from '@angular/core';
import { DaysOfMonth } from '@app/shared/days-of-month.type';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';


@Component({
	selector: 'weeks-of-month',
	template: `
		<div id="weeks-of-month">
			<div *ngFor="let week of weeks" class="week-block">
				<day-of-month *ngFor="let day of week" [number]="day"></day-of-month>
			</div>
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
