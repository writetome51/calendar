import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { isLeapYear } from '@writetome51/is-leap-year';
import { not } from '@writetome51/not';
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
		// if `endingAtYear` begins a new century, it cannot be counted!
		// This is because we're ending on it, meaning it hasn't passed.
		if (toStr(endingAtYear).endsWith('00')) --endingAtYear;

		let [centuryOfStartYear, centuryOfEndYear] =
			this.__getThe2CenturiesWithoutTheirLast2Digits(startYear, endingAtYear);

		// If we're still in same century as startYear, there are no false leap years.
		if (centuryOfEndYear === centuryOfStartYear) return 0;

		const numCenturiesToCheck = centuryOfEndYear - centuryOfStartYear;

		// False leap years are any year that begins a new century (evenly divisible by 100),
		// but is not evenly divisible by 400.
		return this.____getNumFalseLeapYearsIn(numCenturiesToCheck, startYear);
	}


	private static ____getNumFalseLeapYearsIn(numCenturiesToCheck, startYear): number {
		let centuryToCheck = Number(
			toStr(this.__withoutLast2Digits(startYear)) + '00'
		);
		let numFalseLeapYears = 0;

		for (let i = 0; i < numCenturiesToCheck; ++i) {
			centuryToCheck += 100;
			if (not(isLeapYear(centuryToCheck))) ++numFalseLeapYears;
		}
		return numFalseLeapYears;
	}


	private static __getThe2CenturiesWithoutTheirLast2Digits(
		startYear, endingAtYear
	): [number, number] {
		return [
			this.__withoutLast2Digits(startYear),
			this.__withoutLast2Digits(endingAtYear)
		];
	}


	private static __withoutLast2Digits(num): number {
		const numDigits = toStr(num).length;
		return Number( toStr(num).substr(0, numDigits - 2) );
	}

}
