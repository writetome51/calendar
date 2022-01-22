import { Component } from '@angular/core';
import { DaysOfMonth, DaysOfMonthData as daysOfMonth } from '@writetome51/calendar-helpers';
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

	get weeks(): DaysOfMonth[] {
		let __weeks = getArrFilled(
			getRoundedUp(daysOfMonth.data.length / 7),
			// @ts-ignore
			(i) => getPage(i + 1, 7, daysOfMonth.data)
		);
		const last = __weeks.length - 1;
		const lastWeekLength = __weeks[last].length;
		__weeks[last].push(...this.__getFillerForLastWeek(lastWeekLength));
		return __weeks;
	}


	private __getFillerForLastWeek(lastWeekLength): ''[] {
		if (lastWeekLength < 7) return getArrFilled(7 - lastWeekLength, () => '');
		else return [];
	}

}
