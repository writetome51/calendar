import { DaysOfMonthData as daysOfMonth } from '@shared/days-of-month.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthAndYearControlsServicesModule } from '../month-and-year-controls-services.module';
import { MonthNamesData as monthNames } from '@shared/month-names.data';
import { SelectedData as selected } from '../selected.data';
import { TodaysDateService as todaysDate } from '@shared/todays-date.service';
import { TodayData as today } from '@shared/today.data';


@Injectable({providedIn: MonthAndYearControlsServicesModule})
export class MonthDisplayService {

	constructor() {
		this.__setSelectedDateToTodaysDate();
		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const {year, monthIndex, days} =
			monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		selected.year = year;
		selected.month = monthNames.data[monthIndex];
		daysOfMonth.data = days;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const {days} = monthCalculator.getMonthData(
			monthNames.data.indexOf(selected.month), selected.year
		);
		daysOfMonth.data = days;
	}


	private __setSelectedDateToTodaysDate() {
		today.data = todaysDate.get();

		selected.year = today.data.year;
		selected.month = monthNames.data[today.data.monthIndex];
		selected.day = today.data.day;
	}

}
