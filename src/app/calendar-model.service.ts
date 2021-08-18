import { CalendarValidatorService } from '@app/calendar-validator.service';
import { CalendarCalculatorService } from '@app/calendar-calculator.service';
import { Injectable } from '@angular/core';
import { getArrFilled } from '@writetome51/get-arr-filled';


@Injectable({providedIn: 'root'})
export class CalendarModelService {

	private __todaysDate = new Date();  // sets to browser's local time.

	monthNames = ["January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"];

	dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

	monthIndex = this.__todaysDate.getMonth();
	currentMonthName = this.monthNames[this.monthIndex];

	year = this.__todaysDate.getFullYear();

	private __monthInfo: { numDays: number, firstDay: number }
		= this.__getMonthInfo(this.monthIndex, this.year);

	daysWithNumbers = this.__getDaysWithNumbers(this.__monthInfo.numDays);
	daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(this.__monthInfo.firstDay);
	daysOfCurrentMonth = [];


	constructor(
		private __validator: CalendarValidatorService,
		private __calculator: CalendarCalculatorService
	) {}


	update() {
		this.update_monthIndex();
		this.updateDaysOfCurrentMonth();
	}


	update_monthIndex() {
		this.monthIndex = this.monthNames.indexOf(this.currentMonthName);
	};


	updateMonthInfo() {
		this.__monthInfo = this.__getMonthInfo(this.monthIndex, this.year);
	};


	updateDaysOfCurrentMonth() {
		this.updateMonthInfo();
		this.daysWithNumbers = this.__getDaysWithNumbers(this.__monthInfo.numDays);
		this.daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(this.__monthInfo.firstDay);
	};


	changeMonthBy(plusOrMinus: number) {
		this.prepareIfEnteringNextOrPreviousYear(plusOrMinus);
		this.monthIndex += plusOrMinus;
		this.currentMonthName = this.monthNames[this.monthIndex];
	};


	prepareIfEnteringNextOrPreviousYear(plusOrMinus: number) {
		this.__ifEnteringPreviousYear_ResetMonthIndexAndYear(plusOrMinus);
		this.__ifEnteringNextYear_ResetMonthIndexAndYear(plusOrMinus);
	};


	private __ifEnteringPreviousYear_ResetMonthIndexAndYear(plusOrMinus: number) {
		if (plusOrMinus < 0 && this.monthIndex === 0) {
			this.monthIndex = 12;
			--this.year;
		}
	};


	private __ifEnteringNextYear_ResetMonthIndexAndYear(plusOrMinus: number) {
		if (plusOrMinus > 0 && this.monthIndex === 11) {
			this.monthIndex = -1;
			++this.year;
		}
	};


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
