import { CalendarValidatorService as validator } from './calendar-validator.service';
import { MonthDaysService } from './month-days_service/month-days.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { DisplayData as displayData } from '@app/display.data';


@Injectable({providedIn: 'root'})
export class MonthDataCalculatorService {

	private __monthIndex = 0;
	private __year = 1000;
	private __monthInfo = {numDays: 0, weekdayIndexOfFirstDay: -1};


	constructor(private __monthDays: MonthDaysService) {}


	getMonthData(
		monthName?: string, year?: number
	): { month: string, year: number, daysOfMonth: (number | '')[] } {

		if (monthName && year) this.__setMonthAndYear(monthName, year);
		return {
			year: this.__year,
			month: displayData.monthNames[this.__monthIndex],
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
		this.__monthIndex = displayData.monthNames.indexOf(monthName);
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
		if (validator.monthAndYearValid(monthIndex, year)) {
			return {
				numDays: this.__monthDays.getNumDaysInMonth(monthIndex, year),
				weekdayIndexOfFirstDay:
					this.__monthDays.getFirstDayOfRequestedMonthAsWeekdayIndex(monthIndex, year)
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
