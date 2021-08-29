import { CalendarData as calendar } from '@app/calendar.data';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';


export class CalendarValidatorService {

	static monthAndYearValid(monthIndex: number, year: number): boolean {
		const stringMonthIndex = ('' + monthIndex);
		monthIndex = getRoundedDown(monthIndex);
		const integerYear = getRoundedDown(year);
		const stringYear = ('' + year);

		return (
			stringMonthIndex.length > 0 &&
			(monthIndex > -1) && (monthIndex < 12) &&
		 	(stringYear.length === 4) &&  (integerYear >= calendar.startYear)
		);
	}


}
