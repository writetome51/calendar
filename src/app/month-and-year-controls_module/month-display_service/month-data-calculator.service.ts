import { CalendarValidatorService } from './calendar-validator.service';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { setArray } from '@writetome51/set-array';
import { DisplayData as display } from '@app/data/display.data';


@Injectable({providedIn: 'root'})
export class MonthDataCalculatorService {

	private __monthIndex = 0;
	private __monthInfo = {numDays: 0, weekdayIndexOfFirstDay: -1};
	private __todaysDate = new Date();  // sets to browser's local time.


	constructor(
		private __validator: CalendarValidatorService,
		private __calculator: CalendarCalculatorService
	) {
		display.year = this.__todaysDate.getFullYear();
	}


	setSelectedMonth(monthName: string) {
		this.__monthIndex = display.monthNames.indexOf(monthName);
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex);
	}


	getCurrentMonth(): string {
		return display.monthNames[this.__todaysDate.getMonth()];
	}


	getSelectedMonthName() {
		return display.monthNames[this.__monthIndex];
	}


	incrementOrDecrementSelectedMonth(plusOrMinusOne: number) {
		this.__incrementOrDecrement__monthIndex(plusOrMinusOne);
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex);
	}


	getDaysOfSelectedMonth(): (string | number)[] {
		const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(
			this.__monthInfo.weekdayIndexOfFirstDay
		);
		const daysWithNumbers = this.__getDaysWithNumbers(this.__monthInfo.numDays);
		return [...daysWithoutNumbers, ...daysWithNumbers];
	}


	private __incrementOrDecrement__monthIndex(plusOrMinusOne: number) {
		this.__monthIndex = this.__getIndexPreparedIfEnteringNextOrPreviousYear(plusOrMinusOne);
		this.__monthIndex += plusOrMinusOne;
	}


	private __getIndexPreparedIfEnteringNextOrPreviousYear(plusOrMinusOne: number) {
		if (this.__enteringPreviousYear(plusOrMinusOne))
			return this.__getIndexPreparedToEnterPreviousYear();
		else if (this.__enteringNextYear(plusOrMinusOne))
			return this.__getIndexPreparedToEnterNextYear();

		else return this.__monthIndex;
	}


	private __enteringPreviousYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === -1 && this.__monthIndex === 0);
	}


	private __enteringNextYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === 1 && this.__monthIndex === 11);
	}


	private __getIndexPreparedToEnterPreviousYear() {
		--display.year;
		return 12;
	}


	private __getIndexPreparedToEnterNextYear() {
		++display.year;
		return -1;
	}


	private __getMonthInfo(monthIndex: number) {
		if (this.__validator.monthAndYearValid(monthIndex, display.year)) {
			return {
				numDays: this.__calculator.getNumDaysInMonth(monthIndex, display.year),
				weekdayIndexOfFirstDay:
					this.__calculator.getFirstDayOfRequestedMonthAsWeekdayIndex(
						monthIndex, display.year
					)
			};
		} else throw new Error('The month index and/or year are invalid');
	}


	private __getDaysThatDontHaveNumbersBefore(firstDayOfMonth: number): string[] {
		return getArrFilled(firstDayOfMonth, () => '');
	}


	private __getDaysWithNumbers(numberOfDays: number): number[] {
		// @ts-ignore
		return getArrFilled(numberOfDays, (i) => (i + 1));
	}

}
