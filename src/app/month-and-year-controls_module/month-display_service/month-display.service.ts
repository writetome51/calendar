import { CalendarData as calendar } from '@app/calendar.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService }
	from './month-data-calculator_service/month-data-calculator.service';
import { TodaysDateService as __todaysDate } from './todays-date.service';


@Injectable({providedIn: 'root'})
export class MonthDisplayService {

	constructor(private __monthCalculator: MonthDataCalculatorService) {
		const todaysDate = __todaysDate.get();
		calendar.selectedYear = todaysDate.year;
		calendar.selectedMonth = todaysDate.month;

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const data = this.__monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		calendar.selectedYear = data.year;
		calendar.selectedMonth = data.month;
		calendar.daysOfMonth = data.daysOfMonth;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const data = this.__monthCalculator.getMonthData(
			calendar.selectedMonth, calendar.selectedYear
		);
		calendar.daysOfMonth = data.daysOfMonth;
	}

}
