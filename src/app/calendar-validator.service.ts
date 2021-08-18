import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CalendarValidatorService {

	monthAndYearValid(monthID: number, yearID: number): boolean {
		var stringMonthID = ('' + monthID);
		monthID = Math.floor(monthID);
		var integerYearID = Math.floor(yearID);
		var stringYearID = ('' + yearID);

		return (
			stringMonthID.length > 0 && 
			(typeof monthID === 'number') && 
			(monthID > -1) && (monthID < 12) &&
 			(typeof integerYearID === 'number')  && 
		 	(stringYearID.length === 4) &&  (integerYearID >= 1004) 
		);
	}


}
