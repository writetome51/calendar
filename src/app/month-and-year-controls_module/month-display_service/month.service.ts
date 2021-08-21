import { Injectable } from '@angular/core';
import { setArray } from '@writetome51/set-array';
import { DisplayData as display } from '@app/data/display.data';
import { MonthDataCalculatorService } from './month-data-calculator.service';


@Injectable({providedIn: 'root'})
export class MonthService {

	constructor(private __monthCalculator: MonthDataCalculatorService) {
		display.selectedMonth = this.__monthCalculator.getCurrentMonth();
		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		this.__monthCalculator.incrementOrDecrementSelectedMonth(plusOrMinusOne);
		display.selectedMonth = this.__monthCalculator.getSelectedMonthName();
		setArray(display.days, this.__monthCalculator.getDaysOfSelectedMonth());
	}


	updateOnChangeOfSelectedMonthOrYear() {
		this.__monthCalculator.setSelectedMonth(display.selectedMonth);
		setArray(display.days, this.__monthCalculator.getDaysOfSelectedMonth());
	}

}
