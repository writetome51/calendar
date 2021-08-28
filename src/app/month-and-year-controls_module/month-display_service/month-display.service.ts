import { CalendarData as calendar } from '@app/calendar.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthAndYearControlsServicesModule } from '../month-and-year-controls-services.module';
import { TodaysDateService as __todaysDate } from './todays-date.service';


@Injectable({providedIn: MonthAndYearControlsServicesModule})
export class MonthDisplayService {

	constructor() {
		const todaysDate = __todaysDate.get();
		calendar.selectedYear = todaysDate.year;
		calendar.selectedMonth = todaysDate.month;

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const data = monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		calendar.selectedYear = data.year;
		calendar.selectedMonth = data.month;
		calendar.daysOfMonth = data.days;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const data = monthCalculator.getMonthData(calendar.selectedMonth, calendar.selectedYear);
		calendar.daysOfMonth = data.days;
	}

}
