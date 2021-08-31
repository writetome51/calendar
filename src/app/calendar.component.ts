import { Component, Input, OnInit } from '@angular/core';
import { DaysOfMonthData } from './days-of-month.data';
import { DayScheduleService } from '@app/day-schedule.service';
import { CalendarContext } from '@app/calendar-context.interface';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>

			<weeks-of-month [days]="daysOfMonth.data"></weeks-of-month>
		</div>
	`,
	providers: [DayScheduleService]
})
export class CalendarComponent implements OnInit {

	@Input() context: CalendarContext | undefined;

	daysOfMonth = DaysOfMonthData;


	constructor(private __daySchedule: DayScheduleService) {}


	ngOnInit() {
		if (this.context) this.__daySchedule.setContext(this.context.daySchedule);
	}

}
