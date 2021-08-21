export class DisplayData  {

	static readonly monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	static selectedMonth = '';

	// Since a displayed month often begins with days that don't have numbers (for instance, the
	// first day of the month is a Saturday, so Saturday is labeled '1' and all the previous days
	// in that week are numberless), this will contain empty strings to represent any numberless days.
	static days: Array<number | ''> = [];

	static selectedYear = 1004;

}
