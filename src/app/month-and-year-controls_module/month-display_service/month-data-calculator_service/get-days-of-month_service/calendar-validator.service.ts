import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { StartYearData as startYear } from '@app/month-and-year-controls_module/start-year.data';


export class CalendarValidatorService {

	static monthAndYearValid(monthIndex: number, year: number): boolean {
		const stringMonthIndex = ('' + monthIndex);
		monthIndex = getRoundedDown(monthIndex);
		const integerYear = getRoundedDown(year);
		const stringYear = ('' + year);

		return (
			stringMonthIndex.length > 0 &&
			(monthIndex > -1) && (monthIndex < 12) &&
		 	(stringYear.length === 4) &&  (integerYear >= startYear)
		);
	}


}
