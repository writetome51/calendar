import { CalendarValidatorService } from './calendar-validator.service';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { Injectable } from '@angular/core';
import { getArrFilled } from '@writetome51/get-arr-filled';


@Injectable({providedIn: 'root'})
export class CalendarModelService {

	monthNames = ["January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"];

	selectedMonthName: string;
	daysOfSelectedMonth: (string | number)[];
	year: number;

	private __monthIndex: number;
	private __monthInfo: { numDays: number, firstDay: number };
	private __todaysDate = new Date();  // sets to browser's local time.


	constructor(
		private __validator: CalendarValidatorService,
		private __calculator: CalendarCalculatorService
	) {
		this.__monthIndex = this.__todaysDate.getMonth();
		this.selectedMonthName = this.monthNames[this.__monthIndex];
		this.year = this.__todaysDate.getFullYear();
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex, this.year);

		this.daysOfSelectedMonth = this.__get_daysOfSelectedMonth(this.__monthInfo);
	}


	incrementOrDecrementSelectedMonth(plusOrMinusOne: number) {
		this.__incrementOrDecrement__monthIndex_and_selectedMonthName(plusOrMinusOne);
		this.update_daysOfSelectedMonth();
	}


	updateOnChangeOf_selectedMonthName() {
		this.__monthIndex = this.monthNames.indexOf(this.selectedMonthName);
		this.update_daysOfSelectedMonth();
	}


	update_daysOfSelectedMonth() {
		this.__monthInfo = this.__getMonthInfo(this.__monthIndex, this.year);
		this.daysOfSelectedMonth = this.__get_daysOfSelectedMonth(this.__monthInfo);
	}


	private __get_daysOfSelectedMonth(
		monthInfo: { firstDay: number, numDays: number }
	): (string | number)[] {
		const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(monthInfo.firstDay);
		const daysWithNumbers = this.__getDaysWithNumbers(monthInfo.numDays);
		return [...daysWithoutNumbers, ...daysWithNumbers];
	}


	private __incrementOrDecrement__monthIndex_and_selectedMonthName(plusOrMinusOne: number) {
		this.__prepareIfEnteringNextOrPreviousYear(plusOrMinusOne);
		this.__monthIndex += plusOrMinusOne;
		this.selectedMonthName = this.monthNames[this.__monthIndex];
	}


	private __prepareIfEnteringNextOrPreviousYear(plusOrMinusOne: number) {
		if (this.__enteringPreviousYear(plusOrMinusOne)) this.__prepareToEnterPreviousYear();
		if (this.__enteringNextYear(plusOrMinusOne)) this.__prepareToEnterNextYear();
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
				firstDay: this.__calculator.firstDayOfRequestedMonth(monthIndex, year)
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
