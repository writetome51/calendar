import { Appointment } from '@shared/appointment.type';
import { Component, Input, OnInit } from '@angular/core';
import { DayScheduleService } from '@shared/day-schedule.service';
import { MonthNamesData as monthNames } from '@shared/month-names.data';
import { SelectedData as selected } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'day-of-month',
	template: `
		<div class="calendar-day day-square">
			{{number}}

			<span *ngIf="appointments && appointments.length" class="num-appointments">
				{{appointments.length}}
			</span>
		</div>
	`,
	styles: [`

	`]
})
export class DayOfMonthComponent implements OnInit {

	@Input() number: '' | number = '';
	appointments: Appointment[] | undefined;


	constructor(private __schedule: DayScheduleService) {}


	async ngOnInit() { // @ts-ignore
		this.appointments = await this.__schedule.get(
			selected.year, this.__getMonthNumber(selected.month), Number(this.number)
		);
	}


	private __getMonthNumber(monthName) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
