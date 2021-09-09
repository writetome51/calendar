import { isLeapYear } from './is-leap-year.function';
import { not } from '@writetome51/not';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { getRoundedToPrecision } from '@writetome51/get-rounded-to-precision';
import { toStr } from '@writetome51/to-str';


export class GetNumLeapYearsPassedService {

	static go({startYear, endingAtYear}): number {
		if (not(isLeapYear(startYear))) throw new Error(`The start year must be a leap year`);

		const numPossibleLeapYears =
			this.__getNumPossibleLeapYearsWithin(endingAtYear - startYear);
		const numFalseLeapYears = this.__getNumFalseLeapYearsPassed(startYear, endingAtYear);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	private static __getNumPossibleLeapYearsWithin(numYears): number {
		return getRoundedUp(numYears / 4);
	}


	private static __getNumFalseLeapYearsPassed(startYear, endingAtYear): number {
		const [centuryOfEndYear, centuryOfStartYear] = getThe2CenturiesWithoutTheirLast2Digits();

		// If we're still in same century as startYear, there are no false leap years.
		if (centuryOfEndYear === centuryOfStartYear) return 0;

		const numCenturiesToCheck = centuryOfEndYear - centuryOfStartYear;

		// False leap years are any year that begins a new century (evenly divisible by 100),
		// but is not evenly divisible by 400.
		return this.____getNumFalseLeapYearsIn(numCenturiesToCheck, startYear);


		function getThe2CenturiesWithoutTheirLast2Digits(): [number, number] {
			const numDigitsEnd = toStr(endingAtYear).length;
			const numDigitsStart = toStr(startYear).length;
			return [
				Number( toStr(endingAtYear).substr(0, numDigitsEnd - 2) ),
				Number( toStr(startYear).substr(0, numDigitsStart - 2) )
			];
		}
	}


	private static ____getNumFalseLeapYearsIn(numCenturiesToCheck, startYear): number {
		let yearToCheck = getRoundedToPrecision(startYear, -2);
		// temp:
		console.log('year to check: ', yearToCheck);

		let numFalseLeapYears = 0;

		for (let i = 0; i < numCenturiesToCheck; ++i) {
			yearToCheck += 100;
			if (not(isLeapYear(yearToCheck))) ++numFalseLeapYears;
		}
		return numFalseLeapYears;
	}

}
