import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class CalendarCalculatorService {

	// We're using January 1, 1004 A.D. as frame of reference.
	// It was a Sunday (weekday index 0.  Weekday indexes go from 0 to 6).
	private readonly __startYear = 1004;
	private readonly __first2DigitsOf__startYear = String(this.__startYear).substr(0, 2);
	private __requestedYear = this.__startYear;


	getNumDaysInMonth(monthIndex: number, year: number): number {
		let feb = 28;
		if (this.__isLeapYear(year)) feb = 29;

		const dayCountsForEachMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return dayCountsForEachMonth[monthIndex];
	}


	getFirstDayOfRequestedMonthAsWeekdayIndex(monthIndex: number, year: number): number {
		const jan1AsWeekdayIndex = this.__getFirstDayOfJanuaryAsWeekdayIndex(year);

		const totalDays = this.__getNumDaysFromJanuaryFirstToFirstDayOfRequestedMonth(
			monthIndex, year
		);
		const firstDayOfMonth = jan1AsWeekdayIndex + totalDays;

		// Since the day index can't be greater than 6, reset it:
		return this.__getAsWeekdayIndex(firstDayOfMonth);
	}


	private __getFirstDayOfJanuaryAsWeekdayIndex(year: number) {
		let numYearsSince__startYear = year - this.__startYear;

		// For each leap year that's passed...
		const numLeapYears = this.getNumLeapYearsAfter__startYear_endingAt(year);
		numYearsSince__startYear += numLeapYears; // ... add 1.

		const jan1 = numYearsSince__startYear;
		return this.__getAsWeekdayIndex(jan1);
	}


	private __getNumDaysFromJanuaryFirstToFirstDayOfRequestedMonth(monthIndex: number, year: number) {
		let monthsDayCounts = [];

		for (let month = 0; month < 12; ++month) {
			monthsDayCounts[month] = this.getNumDaysInMonth(month, year);
		}
		for (var month = 0, numDays = 0; month < monthIndex; ++month) {
			numDays += monthsDayCounts[month];
		}
		return numDays;
	}


	getNumLeapYearsAfter__startYear_endingAt(year: number) {
		const numPossibleLeapYears = this.getNumPossibleLeapYearsAfter__startYear_endingAt(year);
		const numFalseLeapYears = this.__getNumFalseLeapYearsIn(numPossibleLeapYears, year);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	getNumPossibleLeapYearsAfter__startYear_endingAt(year: number) {
		const difference = ((Math.floor(year)) - this.__startYear);
		return Math.ceil(difference / 4);
	}


	private __getNumFalseLeapYearsIn(numPossibleLeapYears: number, year: any) {

		const first2DigitsOfYear = String(year).substr(0, 2);
		// If we're still in same century as this.__startYear, there are no false leap years.
		if (first2DigitsOfYear === this.__first2DigitsOf__startYear) return 0;

		// False leap years are any year that is evenly divisible by 100,
		// evenly divisible by 4, but not evenly divisible by 400.
		else return this.____getNumFalseLeapYearsIn(numPossibleLeapYears);
	}


	private ____getNumFalseLeapYearsIn(numPossibleLeapYears: number) {
		for (var i = 1, numFalseLeapYears = 0; i <= numPossibleLeapYears; ++i) {
			const year = (this.__startYear + (i * 4));
			if (year % 100 === 0) {
				if (not(this.__isLeapYear(year))) ++numFalseLeapYears;
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


	private __getAsWeekdayIndex(dayIndex: number) {
		while (dayIndex > 6) dayIndex -= 7;
		return dayIndex;
	}

}
