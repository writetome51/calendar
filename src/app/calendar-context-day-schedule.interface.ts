import { Appointment } from '@shared/appointment.type';


export interface CalendarContextDaySchedule {

	get: (y, m, d) => Appointment[];

}
