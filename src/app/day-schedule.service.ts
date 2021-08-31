import { Injectable } from '@angular/core';
import { Appointment } from '@app/appointment.interface';
import { ImplementationContainerService } from '@app/implementation-container.abstract.service';


@Injectable()
export class DayScheduleService
	extends ImplementationContainerService<{ get: (y, m, d) => Appointment[] }> {

	get(year: number, month: number, dayOfMonth: number): Appointment[] | undefined {
		if (!(this._implementation)) return;
		if (dayOfMonth < 1) return;

		return this._implementation.get(year, month, dayOfMonth);
	}

}
