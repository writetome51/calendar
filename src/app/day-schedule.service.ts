import { Injectable } from '@angular/core';
import { Appointment } from '@app/appointment.interface';


@Injectable()
export class DayScheduleService {

	private __contextSchedule; // CalendarContextDayScheduleService


	setContext(daySchedule) {
		this.__contextSchedule = daySchedule;
	}


	get(year: number, month: number, dayOfMonth: number): Appointment[] | undefined {
		if (!(this.__contextSchedule)) return;
		if (dayOfMonth < 1) return;

		return this.__contextSchedule.get(year, month, dayOfMonth);
	}

}
