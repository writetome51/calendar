import { Appointment } from '@app/appointment.type';
import { CalendarContextDaySchedule } from '@app/calendar-context-day-schedule.interface';
import { Injectable } from '@angular/core';
import { ImplementationContainer } from '@app/implementation-container';


@Injectable()
export class DayScheduleService
	extends ImplementationContainer<CalendarContextDaySchedule> {

	async get(
		year: number, month: number, dayOfMonth: number
	): Promise<Appointment[] | void> {

		if (!(this._implementation)) return;
		if (dayOfMonth < 1) return;

		return this._implementation.get(year, month, dayOfMonth);
	}

}
