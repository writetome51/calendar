import { CalendarData as calendar } from '@app/calendar.data';
import { CalendarValidatorService as validator } from './calendar-validator.service';
import { DaysOfMonth } from '@app/days-of-month.type';
import { getAsWeekdayIndex } from './get-as-weekday-index.function';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { GetNumLeapYearsPassedService as getNumLeapYearsPassed }
	from './get-num-leap-years-passed.service';
import { isLeapYear } from './is-leap-year.function';
import { WeekdayIndex } from './weekday-index.type';


export class GetDaysOfMonthService {

	private static __dayCountsForEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	private static __checkedYear = 0;


	static go(monthIndex, year): DaysOfMonth {
		const {numDays, weekdayIndexOfFirstDay} = this.__getInfo(monthIndex, year);

		const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(weekdayIndexOfFirstDay);
		const daysWithNumbers = this.__getDaysWithNumbers(numDays);
		return [...daysWithoutNumbers, ...daysWithNumbers];
	}


	private static __getInfo(
		monthIndex, year
	): { numDays: number, weekdayIndexOfFirstDay: WeekdayIndex } {
		if (validator.monthAndYearValid(monthIndex, year)) {
			return {
				numDays: this.__getNumDaysInMonth(monthIndex, year),
				weekdayIndexOfFirstDay:
					this.__getFirstOfMonthAsWeekdayIndex(monthIndex, year)
			};
		} else throw new Error('The month index and/or year are invalid');
	}


	private static __getNumDaysInMonth(monthIndex, year): number {
		this.__checkYear(year);
		return this.__dayCountsForEachMonth[monthIndex];
	}


	private static __getFirstOfMonthAsWeekdayIndex(monthIndex, year): WeekdayIndex {
		const jan1AsWeekdayIndex = this.__getFirstOfJanuaryAsWeekdayIndex(year);

		const totalDays = this.__getNumDaysFromJanuaryFirstToFirstOfRequestedMonth(
			monthIndex, year
		);
		const firstDayOfMonth = jan1AsWeekdayIndex + totalDays;

		// Since the day index can't be greater than 6, reset it:
		return getAsWeekdayIndex(firstDayOfMonth);
	}


	private static __getFirstOfJanuaryAsWeekdayIndex(year): WeekdayIndex {
		let numYearsSince__startYear = year - calendar.startYear;

		// For each leap year that's passed...
		const numLeapYearsPassed = getNumLeapYearsPassed.go(
			{startYear: calendar.startYear, endingAtYear: year}
		);
		numYearsSince__startYear += numLeapYearsPassed; // ... add 1.

		const jan1 = numYearsSince__startYear;
		return getAsWeekdayIndex(jan1);
	}


	private static __getNumDaysFromJanuaryFirstToFirstOfRequestedMonth(monthIndex, year): number {
		this.__checkYear(year);

		for (var month = 0, numDays = 0; month < monthIndex; ++month) {
			numDays += this.__dayCountsForEachMonth[month];
		}
		return numDays;
	}


	private static __checkYear(year) {
		if (year === this.__checkedYear) return;

		if (isLeapYear(year)) this.__dayCountsForEachMonth[1] = 29;
		else this.__dayCountsForEachMonth[1] = 28;

		this.__checkedYear = year;
	}


	private static __getDaysThatDontHaveNumbersBefore(weekdayIndex: WeekdayIndex): ''[] {
		return getArrFilled(weekdayIndex, () => '');
	}


	private static __getDaysWithNumbers(numberOfDays: number): number[] {
		// @ts-ignore
		return getArrFilled(numberOfDays, (i) => (i + 1));
	}

}
