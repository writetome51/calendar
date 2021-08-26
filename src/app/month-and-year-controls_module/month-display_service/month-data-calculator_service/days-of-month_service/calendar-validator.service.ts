import { CalendarData as calendar } from '@app/calendar.data';


export class CalendarValidatorService {

	static monthAndYearValid(monthIndex: number, year: number): boolean {
		const stringMonthIndex = ('' + monthIndex);
		monthIndex = Math.floor(monthIndex);
		const integerYear = Math.floor(year);
		const stringYear = ('' + year);

		return (
			stringMonthIndex.length > 0 &&
			(monthIndex > -1) && (monthIndex < 12) &&
		 	(stringYear.length === 4) &&  (integerYear >= calendar.startYear)
		);
	}


}
