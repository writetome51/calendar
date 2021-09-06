import { Component, Input } from '@angular/core';
import { Appointment } from '@app/appointment.interface';
import { DayScheduleService } from '@app/day-schedule.service';
import { SelectedData as selected } from '@app/month-and-year-controls_module/selected.data';
import { MonthNamesData as monthNames }
	from '@app/month-and-year-controls_module/month-names.data';


@Component({
	selector: 'day-of-month',
	template: `
		<div class="day-square calendar-day">
			{{label}}

			<span *ngIf="appointments && appointments.length" class="num-appointments">
				{{appointments.length}}
			</span>
		</div>
	`,
	styles: [`
		.day-square {
			min-height: 50px;
			height: 100%;
			border: 1px solid lightgrey;
			text-align: right;
		}
	`]
})
export class DayOfMonthComponent {

	@Input() label: '' | number = '';


	get appointments(): Appointment[] | undefined {
		return this.__schedule.get(
			selected.year, this.__getMonthNumber(selected.month), Number(this.label)
		);
	}


	constructor(private __schedule: DayScheduleService) {}


	private __getMonthNumber(monthName) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
