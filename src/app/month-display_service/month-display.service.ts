import { CalendarValidatorService } from './calendar-validator.service';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { DaysOfSelectedMonthData as daysOfSelectedMonth} from '../data/days-of-selected-month.data';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { MonthNamesData as monthNames } from '../data/month-names.data';
import { setArray } from '@writetome51/set-array';
import { SelectedMonthData } from '@app/data/selected-month.data';
import { YearData } from '@app/data/year.data';


@Injectable({providedIn: 'root'})
export class MonthDisplayService {

	selectedMonth: string = SelectedMonthData;
	year: number = YearData;

	private __monthIndex: number;
	private __monthInfo = {numDays: 0, weekdayIndexOfFirstDay: -1};
	private __todaysDate = new Date();  // sets to browser's local time.


	constructor(
		private __validator: CalendarValidatorService,
		private __calculator: CalendarCalculatorService
	) {
		this.__monthIndex = this.__todaysDate.getMonth();
		this.selectedMonth = monthNames[this.__monthIndex];
		this.year = this.__todaysDate.getFullYear();

		this.updateDaysOfSelectedMonth();
	}


	goForwardOrBackOneMonth(plusOrMinusOne: 1 | -1) {
		this.__incrementOrDecrement__monthIndex_and_selectedMonthName(plusOrMinusOne);
		this.updateDaysOfSelectedMonth();
	}


	updateOnChangeOf_selectedMonth() {
		this.__monthIndex = monthNames.indexOf(this.selectedMonth);
		this.updateDaysOfSelectedMonth();
	}


	updateDaysOfSelectedMonth() {
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex, this.year);
		setArray(daysOfSelectedMonth, this.__get_daysOfSelectedMonth(this.__monthInfo));
	}


	private __get_daysOfSelectedMonth(
		monthInfo: { weekdayIndexOfFirstDay: number, numDays: number }
	): (string | number)[] {
		const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(
			monthInfo.weekdayIndexOfFirstDay
		);
		const daysWithNumbers = this.__getDaysWithNumbers(monthInfo.numDays);
		return [...daysWithoutNumbers, ...daysWithNumbers];
	}


	private __incrementOrDecrement__monthIndex_and_selectedMonthName(plusOrMinusOne: number) {
		this.__prepareIfEnteringNextOrPreviousYear(plusOrMinusOne);
		this.__monthIndex += plusOrMinusOne;
		this.selectedMonth = monthNames[this.__monthIndex];
	}


	private __prepareIfEnteringNextOrPreviousYear(plusOrMinusOne: number) {
		if (this.__enteringPreviousYear(plusOrMinusOne)) this.__prepareToEnterPreviousYear();
		else if (this.__enteringNextYear(plusOrMinusOne)) this.__prepareToEnterNextYear();
	}


	private __enteringPreviousYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === -1 && this.__monthIndex === 0);
	}


	private __enteringNextYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === 1 && this.__monthIndex === 11);
	}


	private __prepareToEnterPreviousYear() {
		this.__monthIndex = 12;
		--this.year;
	}


	private __prepareToEnterNextYear() {
		this.__monthIndex = -1;
		++this.year;
	}


	private __getMonthInfo(monthIndex: number, year: number) {
		if (this.__validator.monthAndYearValid(monthIndex, year)) {
			return {
				numDays: this.__calculator.getNumDaysInMonth(monthIndex, year),
				weekdayIndexOfFirstDay:
					this.__calculator.getFirstDayOfRequestedMonthAsWeekdayIndex(monthIndex, year)
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
