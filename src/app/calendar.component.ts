import { Component, Input, OnInit } from '@angular/core';
import { CalendarContext } from '@app/calendar-context.interface';
import { DaysOfMonthData } from '@writetome51/calendar-helpers';
import { DayScheduleService } from '@shared/day-schedule.service';
import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>

			<weeks-of-month [days]="daysOfMonth.data"></weeks-of-month>
		</div>
	`
})
export class CalendarComponent implements OnInit {

	// If left undefined, the calendar is a simple date-picker widget.
	@Input() context: CalendarContext | undefined;

	daysOfMonth = DaysOfMonthData;


	constructor(private __daySchedule: DayScheduleService) {
		monthDisplay.init();
	}


	ngOnInit() {
		if (this.context) this.__daySchedule.setImplementation(this.context.daySchedule);
	}

}
