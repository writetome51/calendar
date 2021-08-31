import { DaysOfMonthData as daysOfMonth } from '@app/days-of-month.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthAndYearControlsServicesModule } from '../month-and-year-controls-services.module';
import { TodaysDateService as __todaysDate } from './todays-date.service';
import { SelectedData as selected } from '../selected.data';


@Injectable({providedIn: MonthAndYearControlsServicesModule})
export class MonthDisplayService {

	constructor() {
		const todaysDate = __todaysDate.get();
		selected.year = todaysDate.year;
		selected.month = todaysDate.month;

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const data = monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		selected.year = data.year;
		selected.month = data.month;
		daysOfMonth.data = data.days;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const data = monthCalculator.getMonthData(selected.month, selected.year);
		daysOfMonth.data = data.days;
	}

}
