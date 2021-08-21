import { Injectable } from '@angular/core';
import { setArray } from '@writetome51/set-array';
import { DisplayData as display } from '@app/data/display.data';
import { MonthDataCalculatorService } from './month-data-calculator.service';


@Injectable({providedIn: 'root'})
export class MonthService {

	constructor(private __monthCalculator: MonthDataCalculatorService) {
		const {year, month} = this.__monthCalculator.getCurrentMonthAndYear();
		display.selectedYear = year;
		display.selectedMonth = month;
		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		this.__monthCalculator.incrementOrDecrementMonth(plusOrMinusOne);
		const {year, month} = this.__monthCalculator.getMonthAndYear();

		display.selectedYear = year;
		display.selectedMonth = month;
		setArray(display.days, this.__monthCalculator.getDaysOfMonth());
	}


	updateOnChangeOfSelectedMonthOrYear() {
		this.__monthCalculator.setMonthAndYear(display.selectedMonth, display.selectedYear);
		setArray(display.days, this.__monthCalculator.getDaysOfMonth());
	}

}
