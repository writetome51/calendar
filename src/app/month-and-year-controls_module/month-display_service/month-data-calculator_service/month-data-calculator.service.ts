import { GetDaysOfMonthService as getDaysOfMonth }
	from './get-days-of-month_service/get-days-of-month.service';
import { MonthData } from '../month-data.type';
import { StartYearData } from '../../start-year.data';


export class MonthDataCalculatorService {

	private static __monthIndex = 0;
	private static __year = StartYearData;


	static getMonthData(monthIndex?: number, year?: number): MonthData {
		if (monthIndex && year) this.__setMonthAndYear(monthIndex, year);

		return {
			year: this.__year,
			monthIndex: this.__monthIndex,
			days: getDaysOfMonth.go(this.__monthIndex, this.__year)
		};
	}


	static getNextOrPreviousMonthData(plusOrMinusOne: 1 | -1): MonthData {
		this.__incrementOrDecrement__monthIndex(plusOrMinusOne);
		return this.getMonthData();
	}


	private static __setMonthAndYear(monthIndex: number, year: number) {
		this.__monthIndex = monthIndex;
		this.__year = year;
	}


	private static __incrementOrDecrement__monthIndex(plusOrMinusOne: number) {
		this.__monthIndex = this.__getIndexPreparedIfEnteringNextOrPreviousYear(plusOrMinusOne);
		this.__monthIndex += plusOrMinusOne;
	}


	private static __getIndexPreparedIfEnteringNextOrPreviousYear(plusOrMinusOne: number) {
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


	private static __enteringPreviousYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === -1 && this.__monthIndex === 0);
	}


	private static __enteringNextYear(plusOrMinusOne: number): boolean {
		return (plusOrMinusOne === 1 && this.__monthIndex === 11);
	}

}
