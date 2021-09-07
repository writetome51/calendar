import { DaysOfMonthData as daysOfMonth } from '@shared/days-of-month.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthAndYearControlsServicesModule } from '../month-and-year-controls-services.module';
import { MonthNamesData as monthNames } from '../month-names.data';
import { SelectedData as selected } from '../selected.data';
import { TodaysDateService as __todaysDate } from './todays-date.service';


@Injectable({providedIn: MonthAndYearControlsServicesModule})
export class MonthDisplayService {

	constructor() {
		const todaysDate = __todaysDate.get();
		selected.year = todaysDate.year;
		selected.month = monthNames.data[todaysDate.monthIndex];

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const monthData = monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		selected.year = monthData.year;
		selected.month = monthNames.data[monthData.monthIndex];
		daysOfMonth.data = monthData.days;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const monthData = monthCalculator.getMonthData(
			monthNames.data.indexOf(selected.month), selected.year
		);
		daysOfMonth.data = monthData.days;
	}

}
