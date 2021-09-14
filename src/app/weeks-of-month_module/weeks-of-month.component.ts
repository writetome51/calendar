import { Component, Input } from '@angular/core';
import { DaysOfMonth } from '@app/shared/days-of-month.type';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';


@Component({
	selector: 'weeks-of-month',
	template: `
		<div *ngFor="let week of weeks" class="week-block">
			<div *ngFor="let day of week" class="day-column">
				<day-of-month [number]="day"></day-of-month>
			</div>
		</div>
	`
})
export class WeeksOfMonthComponent {

	readonly data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


	@Input() set days(dys: DaysOfMonth) {
		this.weeks = getArrFilled(
			getRoundedUp(dys.length / 7),
			// @ts-ignore
			(i) => getPage(i + 1, 7, dys)
		);
		let last = this.weeks.length - 1, lastLen = this.weeks[last].length;
		if (lastLen < 7) {
			let filler: DaysOfMonth = getArrFilled(7 - lastLen, () => '');
			this.weeks[last].push(...filler);
		}
	}


	weeks: DaysOfMonth[] = [];

}
