import { CalendarValidatorService } from './calendar-validator.service';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { DisplayData as display } from '@app/data/display.data';


@Injectable({providedIn: 'root'})
export class MonthDataCalculatorService {

	private __monthIndex = 0;
	private __year = 1000;
	private __monthInfo = {numDays: 0, weekdayIndexOfFirstDay: -1};


	constructor(
		private __validator: CalendarValidatorService,
		private __calculator: CalendarCalculatorService
	) {}


	getMonthData(
		monthName?: string, year?: number
	): { month: string, year: number, daysOfMonth: (number | '')[] } {

		if (monthName && year) this.__setMonthAndYear(monthName, year);
		return {
			year: this.__year,
			month: display.monthNames[this.__monthIndex],
			daysOfMonth: this.__getDaysOfMonth()
		};
	}


	getNextOrPreviousMonthData(
		plusOrMinusOne: 1 | -1
	): { month: string, year: number, daysOfMonth: (number | '')[] } {

		this.__incrementOrDecrement__monthIndex(plusOrMinusOne);
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex, this.__year);

		return this.getMonthData();
	}


	private __setMonthAndYear(monthName: string, year: number) {
		this.__monthIndex = display.monthNames.indexOf(monthName);
		this.__year = year;
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex, this.__year);
	}


	private __getDaysOfMonth(): (number | '')[] {
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
		if (this.__enteringPreviousYear(plusOrMinusOne)) {
			--this.__year;
			return 12;
		}
		if (this.__enteringNextYear(plusOrMinusOne)){
			++this.__year;
			return -1;
		}
		return this.__monthIndex;
	}


	private __enteringPreviousYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === -1 && this.__monthIndex === 0);
	}


	private __enteringNextYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === 1 && this.__monthIndex === 11);
	}


	private __getMonthInfo(monthIndex: number, year: number) {
		if (this.__validator.monthAndYearValid(monthIndex, year)) {
			return {
				numDays: this.__calculator.getNumDaysInMonth(monthIndex, year),
				weekdayIndexOfFirstDay:
					this.__calculator.getFirstDayOfRequestedMonthAsWeekdayIndex(
						monthIndex, year
					)
			};
		} else throw new Error('The month index and/or year are invalid');
	}


	private __getDaysThatDontHaveNumbersBefore(firstDayOfMonth: number): ''[] {
		return getArrFilled(firstDayOfMonth, () => '');
	}


	private __getDaysWithNumbers(numberOfDays: number): number[] {
		// @ts-ignore
		return getArrFilled(numberOfDays, (i) => (i + 1));
	}

}
