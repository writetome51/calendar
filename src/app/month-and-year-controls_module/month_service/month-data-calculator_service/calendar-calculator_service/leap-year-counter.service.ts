import { not } from '@writetome51/not';
import { IsLeapYearService as isLeapYear } from './is-leap-year.service';


export class LeapYearCounterService {

	static getNumLeapYearsAfter({startYear, endingAtYear}): number {
		const numPossibleLeapYears =
			this.__getNumPossibleLeapYearsAfter({startYear, endingAtYear});
		const numFalseLeapYears =
			this.__getNumFalseLeapYearsIn(numPossibleLeapYears, startYear, endingAtYear);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	private static __getNumPossibleLeapYearsAfter({startYear, endingAtYear}): number {
		const difference = ((Math.floor(endingAtYear)) - startYear);
		return Math.ceil(difference / 4);
	}


	private static __getNumFalseLeapYearsIn(numPossibleLeapYears, startYear, endingAtYear): number {

		const first2DigitsOfYear = String(endingAtYear).substr(0, 2);
		const first2DigitsOf__startYear = String(startYear).substr(0, 2);
		// If we're still in same century as this.__startYear, there are no false leap years.
		if (first2DigitsOfYear === first2DigitsOf__startYear) return 0;

		// False leap years are any year that is evenly divisible by 100,
		// evenly divisible by 4, but not evenly divisible by 400.
		else return this.____getNumFalseLeapYearsIn(numPossibleLeapYears, startYear);
	}


	private static ____getNumFalseLeapYearsIn(numPossibleLeapYears, startYear): number {
		for (var i = 1, numFalseLeapYears = 0; i <= numPossibleLeapYears; ++i) {
			const year = (startYear + (i * 4));
			if (year % 100 === 0) {
				if (not(isLeapYear.go(year))) ++numFalseLeapYears;
			}
		}
		return numFalseLeapYears;
	}

}
