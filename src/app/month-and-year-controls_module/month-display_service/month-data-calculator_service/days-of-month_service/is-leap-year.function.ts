export function isLeapYear(year): boolean {
	return (
		(year % 400 === 0) ||
		(year % 4 === 0 && year % 100 !== 0)
	);
}
