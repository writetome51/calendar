import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CalendarCalculatorService {

	getNumDaysInMonth(monthIndex: number, year: number): number {
		let feb: number;
		if (this.__isLeapYear(year)) feb = 29;
		else feb = 28;

		const dayCountsForEachMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return dayCountsForEachMonth[monthIndex];
	}


	// Returns the first day of the passed month and year, in the
	// form of a weekday index, from 0 to 6  (0 being Sunday).
	firstDayOfRequestedMonth(monthIndex: number, year: number): number {
		var jan1 = this.firstDayOfJanuary(year);

		var totalDays = this.numDaysFromJanuaryFirstToFirstDayOfRequestedMonth(monthIndex, year);
		var firstDayOfMonth = jan1 + totalDays;

		// Since the day index can't be greater than 6, reset it:
		return this.__resetToZeroThruSix(firstDayOfMonth);
	}


	firstDayOfJanuary(year: number) {
		// We're using January 1, 1004 A.D. as frame of reference.  It was a Sunday, so
		// based on that info, calculate the day of the week january 1st was in passed year:
		let dayIndex = year - 1004;

		const num = this.numLeapYearsBetween1004And(year); // ...for each leap year that's passed...
		dayIndex += num; // ... skip a day (add 1).

		const jan1 = dayIndex;

		return this.__resetToZeroThruSix(jan1);
	}


	numDaysFromJanuaryFirstToFirstDayOfRequestedMonth(monthIndex: number, year: number) {
		let monthsDayCounts = [];

		for (let month = 0; month < 12; ++month) {
			monthsDayCounts[month] = this.getNumDaysInMonth(month, year);
		}
		for (var month = 0, numDays = 0; month < monthIndex; ++month) {
			numDays += monthsDayCounts[month];
		}
		return numDays;
	}


	numLeapYearsBetween1004And(year: number) {
		const numPossibleLeapYears = this.countPossibleLeapYearsUpTo(year);
		const numFalseLeapYears = this.countFalseLeapYearsIn(numPossibleLeapYears, year);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	countPossibleLeapYearsUpTo(year: number) {
		const difference = ((Math.floor(year)) - 1004);
		return Math.ceil(difference / 4);
	}


	countFalseLeapYearsIn(numPossibleLeapYears: number, year: any) {
		year = String(year);
		var first2CharsOfYear = year.substr(0, 2);
		if (first2CharsOfYear !== '10') {
			// False leap years are any year that is evenly divisible by 100,
			// evenly divisible by 4, but not evenly divisible by 400.
			return this.__getNumFalseLeapYearsIn(numPossibleLeapYears);
		}
		else return 0;
	}


	private __getNumFalseLeapYearsIn(numPossibleLeapYears: number) {
		for (var i = 1, numFalseLeapYears = 0; i <= numPossibleLeapYears; ++i) {
			var year = (1004 + (i * 4));
			if (year % 100 === 0) {
				if (!(this.__isLeapYear(year))) numFalseLeapYears += 1;
			}
		}
		return numFalseLeapYears;
	}


	private __isLeapYear(year: number) {
		return (
			(year % 400 === 0) ||
			(year % 4 === 0 && year % 100 !== 0)
		);
	}


	private __resetToZeroThruSix(dayIndex: number) {
		while (dayIndex > 6) dayIndex -= 7;

		return dayIndex;
	}

}
