import { VisibleData as visible } from '@app/visible.data';
import { Injectable } from '@angular/core';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthAndYearControlsServicesModule } from '../month-and-year-controls-services.module';
import { TodaysDateService as __todaysDate } from './todays-date.service';


@Injectable({providedIn: MonthAndYearControlsServicesModule})
export class MonthDisplayService {

	constructor() {
		const todaysDate = __todaysDate.get();
		visible.selectedYear = todaysDate.year;
		visible.selectedMonth = todaysDate.month;

		this.updateOnChangeOfSelectedMonthOrYear();
	}


	goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const data = monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		visible.selectedYear = data.year;
		visible.selectedMonth = data.month;
		visible.daysOfMonth = data.days;
	}


	updateOnChangeOfSelectedMonthOrYear() {
		const data = monthCalculator.getMonthData(visible.selectedMonth, visible.selectedYear);
		visible.daysOfMonth = data.days;
	}

}
