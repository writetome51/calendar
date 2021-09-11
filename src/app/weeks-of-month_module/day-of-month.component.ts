import { Appointment } from '@shared/appointment.type';
import { Component, Input, OnInit } from '@angular/core';
import { DayScheduleService } from '@shared/day-schedule.service';
import { MonthNamesData as monthNames } from '@shared/month-names.data';
import { SelectedData as selected } from '@app/month-and-year-controls_module/selected.data';


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
export class DayOfMonthComponent implements OnInit {

	@Input() label: '' | number = '';
	appointments: Appointment[] | undefined;


	constructor(private __schedule: DayScheduleService) {}


	async ngOnInit() { // @ts-ignore
		this.appointments = await this.__schedule.get(
			selected.year, this.__getMonthNumber(selected.month), Number(this.label)
		);
	}


	private __getMonthNumber(monthName) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
