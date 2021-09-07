import { not } from '@writetome51/not';
import { isLeapYear } from './is-leap-year.function';
import { getRoundedDown, getRoundedUp } from '@writetome51/get-rounded-up-down';


export class GetNumLeapYearsPassedService {

	static go({startYear, endingAtYear}): number {
		if (not(isLeapYear(startYear))) throw new Error(`The start year must be a leap year`);

		const numPossibleLeapYears =
			this.__getNumPossibleLeapYearsAfter({startYear, endingAtYear});
		const numFalseLeapYears =
			this.__getNumFalseLeapYearsIn(numPossibleLeapYears, startYear, endingAtYear);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	private static __getNumPossibleLeapYearsAfter({startYear, endingAtYear}): number {
		const difference = ((getRoundedDown(endingAtYear)) - startYear);
		return getRoundedUp(difference / 4);
	}


	private static __getNumFalseLeapYearsIn(
		numPossibleLeapYears, startYear, endingAtYear
	): number {

		const first2DigitsOfYear = String(endingAtYear).substr(0, 2);
		const first2DigitsOf__startYear = String(startYear).substr(0, 2);
		// If we're still in same century as startYear, there are no false leap years.
		if (first2DigitsOfYear === first2DigitsOf__startYear) return 0;

		// False leap years are any year that is evenly divisible by 100,
		// evenly divisible by 4, but not evenly divisible by 400.
		else return this.____getNumFalseLeapYearsIn(numPossibleLeapYears, startYear);
	}


	private static ____getNumFalseLeapYearsIn(numPossibleLeapYears, startYear): number {
		for (var i = 1, numFalseLeapYears = 0; i <= numPossibleLeapYears; ++i) {
			const year = (startYear + (i * 4));
			if (year % 100 === 0) {
				if (not(isLeapYear(year))) ++numFalseLeapYears;
			}
		}
		return numFalseLeapYears;
	}

}
