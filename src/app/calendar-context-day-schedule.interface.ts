import { Appointment } from '@app/appointment.type';


export interface CalendarContextDaySchedule {

	get: (y, m, d) => Appointment[];

}
