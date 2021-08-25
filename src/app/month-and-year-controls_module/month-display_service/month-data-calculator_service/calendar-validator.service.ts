export class CalendarValidatorService {

	static monthAndYearValid(monthIndex: number, year: number): boolean {
		const stringMonthIndex = ('' + monthIndex);
		monthIndex = Math.floor(monthIndex);
		const integerYearID = Math.floor(year);
		const stringYear = ('' + year);

		return (
			stringMonthIndex.length > 0 &&
			(typeof monthIndex === 'number') &&
			(monthIndex > -1) && (monthIndex < 12) &&
 			(typeof integerYearID === 'number')  && 
		 	(stringYear.length === 4) &&  (integerYearID >= 1004)
		);
	}


}
