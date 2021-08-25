import { Injectable } from '@angular/core';
import { getAsWeekdayIndex } from './get-as-weekday-index.function';
import { isLeapYear } from './is-leap-year.function';
import { LeapYearCounterService as leapYearCounter } from './leap-year-counter.service';


@Injectable({providedIn: 'root'})
export class MonthDaysService {

	// We're using January 1, 1004 A.D. as frame of reference.
	// It was a Sunday (weekday index 0.  Weekday indexes go from 0 to 6).
	private readonly __startYear = 1004;
	private __dayCountsForEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	private __checkedYear = 0;


	getNumDaysInMonth(monthIndex, year): number {
		this.__checkYear(year);
		return this.__dayCountsForEachMonth[monthIndex];
	}


	getFirstDayOfRequestedMonthAsWeekdayIndex(monthIndex, year): number {
		const jan1AsWeekdayIndex = this.__getFirstDayOfJanuaryAsWeekdayIndex(year);

		const totalDays = this.__getNumDaysFromJanuaryFirstToFirstDayOfRequestedMonth(
			monthIndex, year
		);
		const firstDayOfMonth = jan1AsWeekdayIndex + totalDays;

		// Since the day index can't be greater than 6, reset it:
		return getAsWeekdayIndex(firstDayOfMonth);
	}


	private __getFirstDayOfJanuaryAsWeekdayIndex(year): number {
		let numYearsSince__startYear = year - this.__startYear;

		// For each leap year that's passed...
		const numLeapYears = leapYearCounter.getNumLeapYearsAfter(
			{startYear: this.__startYear, endingAtYear: year}
		);
		numYearsSince__startYear += numLeapYears; // ... add 1.

		const jan1 = numYearsSince__startYear;
		return getAsWeekdayIndex(jan1);
	}


	private __getNumDaysFromJanuaryFirstToFirstDayOfRequestedMonth(monthIndex, year): number {
		this.__checkYear(year);

		for (var month = 0, numDays = 0; month < monthIndex; ++month) {
			numDays += this.__dayCountsForEachMonth[month];
		}
		return numDays;
	}


	private __checkYear(year) {
		if (year === this.__checkedYear) return;

		if (isLeapYear(year)) this.__dayCountsForEachMonth[1] = 29;
		else this.__dayCountsForEachMonth[1] = 28;

		this.__checkedYear = year;
	}

}
