import { isLeapYear } from './is-leap-year.function';
import { not } from '@writetome51/not';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
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
		const [centuryOfEndYear, centuryOfStartYear] = getThe2Centuries();
		// If we're still in same century as startYear, there are no false leap years.
		if (centuryOfEndYear === centuryOfStartYear) return 0;

		const numCenturiesToCheck = ((centuryOfEndYear / 100) - (centuryOfStartYear / 100));

		// False leap years are any year that begins a new century (evenly divisible by 100),
		// but is not evenly divisible by 400.
		return this.____getNumFalseLeapYearsIn(numCenturiesToCheck, centuryOfStartYear);


		function getThe2Centuries(): [number, number] {
			const numDigitsEnd = toStr(endingAtYear).length;
			const numDigitsStart = toStr(startYear).length;
			return [
				Number(toStr(endingAtYear).substr(0, numDigitsEnd - 2) + '00'),
				Number(toStr(startYear).substr(0, numDigitsStart - 2) + '00')
			];
		}
	}


	private static ____getNumFalseLeapYearsIn(numCenturiesToCheck, centuryOfStartYear): number {
		let centuryToCheck = centuryOfStartYear + 100;
		let numFalseLeapYears = 0;

		while (not(isLeapYear(centuryToCheck))) {
			++numFalseLeapYears;
			centuryToCheck += 100;
		}
		// the extra 1 counts the last call of isLeapYear(centuryToCheck):
		numCenturiesToCheck -= (numFalseLeapYears + 1);

		let numRealLeapYearsRemaining = Math.round(numCenturiesToCheck / 4);
		return numCenturiesToCheck - numRealLeapYearsRemaining + numFalseLeapYears;
	}

}
