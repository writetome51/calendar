import { CalendarData as calendar } from '@app/calendar.data';
import { GetDaysOfMonthService } from './get-days-of-month_service/get-days-of-month.service';
import { Injectable } from '@angular/core';
import { MonthData } from '../month-data.type';


@Injectable({providedIn: 'root'})
export class MonthDataCalculatorService {

	private __monthIndex = 0;
	private __year = calendar.startYear;


	constructor(private __getDaysOfMonth: GetDaysOfMonthService) {}


	getMonthData(monthName?: string, year?: number): MonthData {
		if (monthName && year) this.__setMonthAndYear(monthName, year);

		return {
			year: this.__year,
			month: calendar.monthNames[this.__monthIndex],
			days: this.__getDaysOfMonth.go(this.__monthIndex, this.__year)
		};
	}


	getNextOrPreviousMonthData(plusOrMinusOne: 1 | -1): MonthData {
		this.__incrementOrDecrement__monthIndex(plusOrMinusOne);
		return this.getMonthData();
	}


	private __setMonthAndYear(monthName: string, year: number) {
		this.__monthIndex = calendar.monthNames.indexOf(monthName);
		this.__year = year;
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

}
