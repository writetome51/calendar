import { Injectable } from '@angular/core';
import { DisplayData as display } from '@app/display.data';
import { MonthDataCalculatorService }
	from './month-data-calculator_service/month-data-calculator.service';
import { TodaysDateService as __todaysDate } from './todays-date.service';


@Injectable({providedIn: 'root'})
export class MonthDisplayService {

	constructor(private __monthCalculator: MonthDataCalculatorService) {
		const todaysDate = __todaysDate.get();
		display.selectedYear = todaysDate.year;
		display.selectedMonth = todaysDate.month;

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const data = this.__monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		display.selectedYear = data.year;
		display.selectedMonth = data.month;
		display.days = data.daysOfMonth;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const data = this.__monthCalculator.getMonthData(display.selectedMonth, display.selectedYear);
		display.days = data.daysOfMonth;
	}

}
