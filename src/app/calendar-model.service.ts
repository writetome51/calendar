import { CalendarValidatorService } from '@app/calendar-validator.service';
import { CalendarCalculatorService } from '@app/calendar-calculator.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CalendarModelService {

	private __todaysDate = new Date();  // sets to browser's local time.
	private __validator = new CalendarValidatorService();
	private __calculator = new CalendarCalculatorService();

	monthNames = ["January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"];

	days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

	monthID = this._getCurrentMonthID();

	monthName = this._getMonthName(this.monthID, this.monthNames);

	year = this._getCurrentYear();

	private __monthInfo = this._getMonthInfo(this.monthID, this.year);

	daySquares = this.__getDaySquares(this.__monthInfo);


	updateMonthID() {
		this.monthID = this.monthNames.indexOf(this.monthName);
	};


	updateMonthInfo() {
		this.__monthInfo = this._getMonthInfo(this.monthID, this.year);
	};


	updateDaySquares() {
		this.updateMonthInfo();
		this.daySquares = this.__getDaySquares(this.__monthInfo);
	};


	changeMonthBy(plusOrMinus: number) {
		this.prepareIfEnteringNextOrPreviousYear(plusOrMinus);
		this.monthID += plusOrMinus;
		this.monthName = this._getMonthName(this.monthID, this.monthNames);
	};


	prepareIfEnteringNextOrPreviousYear(plusOrMinus: number) {
		this.ifEnteringPreviousYear_ResetMonthIDAndYear(plusOrMinus);
		this.ifEnteringNextYear_ResetMonthIDAndYear(plusOrMinus);
	};


	ifEnteringPreviousYear_ResetMonthIDAndYear(plusOrMinus: number) {
		if (plusOrMinus < 0 && this.monthID === 0) {
			this.monthID = 12;
			this.year -= 1;
		}
	};


	ifEnteringNextYear_ResetMonthIDAndYear(plusOrMinus: number) {
		if (plusOrMinus > 0 && this.monthID === 11) {
			this.monthID = -1;
			this.year += 1;
		}
	};


	_getMonthName(monthIndex: number, monthNames: string[]) {
		return (monthNames[monthIndex]);
	}


	_getCurrentMonthID() {
		return this.__todaysDate.getMonth();
	}


	_getCurrentYear() {
		return this.__todaysDate.getFullYear();
	}


	private _getMonthInfo(monthIndex: number, year: number) {
		if (this.__validator.monthAndYearValid(monthIndex, year)) {
			return {
				numDays: this.__calculator.getNumDaysInMonth(monthIndex, year),
				firstDay: this.__calculator.firstDayOfRequestedMonth(monthIndex, year)
			};
		}
		else throw new Error('The month index and/or year are invalid');
	}


	private __getDaySquares(monthInfo: { numDays: any; firstDay: any; }) {
		var firstDayOfMonth = monthInfo.firstDay;

		return {
			withoutNumbers: this.__daySquaresThatDontHaveNumbersBefore(firstDayOfMonth),
			withNumbers: this.__daysOfMonth(monthInfo.numDays)
		};
	}


	private __daySquaresThatDontHaveNumbersBefore(firstDayOfMonth: number) {
		for (var i = 0, daySquares = []; i < firstDayOfMonth; ++i) {
			daySquares[i] = '';
		}
		return daySquares;
	}


	private __daysOfMonth(numberOfDays: number) {
		for (var i = 0, daysWithNumbers = []; i < numberOfDays; ++i) {
			daysWithNumbers[i] = (i + 1);
		}
		return daysWithNumbers;
	}

}
