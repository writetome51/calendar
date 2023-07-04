import {Appointment} from './appointment.type';


export interface CalendarContextDaySchedule {

   get: (y, m, d) => Appointment[];

}
