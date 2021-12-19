import { Appointment } from './appointment.type';
import { CalendarContextDaySchedule } from './calendar-context-day-schedule.interface';
import { Injectable } from '@angular/core';
import { ImplementationContainer } from './implementation-container';


@Injectable({providedIn: 'root'})
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
