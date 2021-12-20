import { Appointment } from '@app/calendar_module/shared/appointment.type';
import { Component, Input, OnInit } from '@angular/core';
import { DayScheduleService } from '../day-schedule_service';
import { MonthNamesData as monthNames, SelectedData as selected, TodayData as today }
	from '@writetome51/calendar-helpers';


@Component({
	selector: 'day-of-month',
	template: `
		<div class="calendar-day day-square" [class.today]="isToday()">
			&nbsp;{{number}}&nbsp;

			<span *ngIf="appointments && appointments.length" class="num-appointments">
				{{appointments.length}}
			</span>
		</div>
	`,
	styles: [`.today { background-color: rgba(167, 255, 167, 0.87) }`]
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


	isToday(): boolean {
		return (
			today.data.day === this.number &&
			monthNames.data[today.data.monthIndex] === selected.month &&
			today.data.year === selected.year
		);
	}


	private __getMonthNumber(monthName) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
