(function(){
	var app = angular.module('calendarApp', []);

	app.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller:  CalendarController,
			controllerAs: 'cal'
		};
	});




	var CalendarController = function(){

		this.model = new CalendarModel();


		this.update = function(){
			this.model.updateMonthID();
			this.model.updateDaySquares();
		};


		this.backOneMonthUpdate = function(){
			this.changeMonthAndUpdateCalendar(-1);
		};


		this.forwardOneMonthUpdate = function(){
			this.changeMonthAndUpdateCalendar(1);
		};


		this.changeMonthAndUpdateCalendar = function(plusOrMinus){
			this.model.changeMonthBy(plusOrMinus);
			this.update();
		};

	
	};		

	

	
	var CalendarModel = function(){

		var _todaysDate = new Date();  // sets to browser's local time.
		var _validate = new CalendarValidator();
		var _calculate = new CalendarCalculator();
	
		this.monthNames =  ["January", "February", "March", "April", "May", "June", "July",
					"August", "September", "October", "November", "December"];

		this.days =  ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

		this.monthID =  _getCurrentMonthID();		

		this.monthName =  _getMonthName(this.monthID, this.monthNames);

		this.year =  _getCurrentYear();

		var _monthInfo =  _getMonthInfo(this.monthID, this.year);

		this.daySquares =  _getDaySquares( _monthInfo);


		this.updateMonthID = function(){
			this.monthID = this.monthNames.indexOf(this.monthName);
		};


		this.updateMonthInfo = function(){
			_monthInfo =  _getMonthInfo(this.monthID, this.year);
		};


		this.updateDaySquares = function(){
			this.updateMonthInfo();
			this.daySquares =  _getDaySquares(_monthInfo);
		};


		this.changeMonthBy = function(plusOrMinus){
			this.prepareIfEnteringNextOrPreviousYear(plusOrMinus);
			this.monthID += plusOrMinus;
			this.monthName =  _getMonthName(this.monthID, this.monthNames);
		};



		this.prepareIfEnteringNextOrPreviousYear = function(plusOrMinus){
			this.ifEnteringPreviousYear_ResetMonthIDAndYear(plusOrMinus);
			this.ifEnteringNextYear_ResetMonthIDAndYear(plusOrMinus);
		};



		this.ifEnteringPreviousYear_ResetMonthIDAndYear = function(plusOrMinus){
			if (plusOrMinus < 0  &&  this.monthID === 0){
				this.monthID = 12;
				this.year -= 1;
			}
		};


		this.ifEnteringNextYear_ResetMonthIDAndYear = function(plusOrMinus){
			if (plusOrMinus > 0  &&  this.monthID === 11){
				this.monthID = -1;
				this.year += 1;
			}
		};



		function _getMonthName(index, monthNames){
			return (monthNames[index]); 
		}


		function _getCurrentMonthID(){
			return  _todaysDate.getMonth();
		}


		function _getCurrentYear(){
			return  _todaysDate.getFullYear();  
		}



		function _getMonthInfo(monthID, year) {
			if ( _validate.monthAndYear(monthID, year)){
				return {
					numDays:  _calculate.numberOfDaysInMonth(monthID, year), 
					firstDay:  _calculate.firstDayOfRequestedMonth(monthID, year)
				};
			}
		}



		function _getDaySquares(monthInfo){
			var firstDayOfMonth =  monthInfo.firstDay;
			
			return {
				withoutNumbers:  _daySquaresThatDontHaveNumbersBefore(firstDayOfMonth),
				withNumbers:  _daysOfMonth(monthInfo.numDays)
			};
		}



		function _daySquaresThatDontHaveNumbersBefore(firstDayOfMonth){
			for (var i=0, daySquares=[];  i < firstDayOfMonth;  ++i) {
				daySquares[i] = ''; 
			}
			return daySquares;
		}



		function _daysOfMonth(numberOfDays){
			for (var i=0, daysWithNumbers=[];  i < numberOfDays;  ++i) {
				
				daysWithNumbers[i] = (i + 1);
			}
			return daysWithNumbers;
		}



	};







	var CalendarCalculator = function(){

		this.getNumDaysInMonth = function(monthID, yearID){
			var feb;

			//Check if supplied month is February...
			if (monthID === 1) {
				if (isLeapYear(yearID))
					feb = 29;
				else feb = 28;
			}

			var dayCountsForEachMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		
			return dayCountsForEachMonth[monthID];
		};




		// It will return the first day of the passed month and year, in the 
		// form of a weekday index, from 0 to 6  (0 being Sunday).
		this.firstDayOfRequestedMonth = function(monthID, yearID) {
			var jan1 = firstDayOfJanuary(yearID);
		
			var totalDays =  this.numDaysFromJanuaryFirstToFirstDayOfRequestedMonth(
						monthID, yearID);
			var firstDayOfMonth = jan1 + totalDays;

			// Since the day index can't be greater than 6, reset it:
			return  resetToZeroThruSix(firstDayOfMonth);
		};



		function firstDayOfJanuary(yearID){
			// We're using January 1, 1004 A.D. as frame of reference.  It was a Sunday, so
			// based on that info, calculate the day of the week january 1st was in passed yearID:
			var dayIndex = yearID - 1004;
	
			var num = numLeapYearsBetween1004And(yearID); // ...for each leap year that's 
													// passed...
			dayIndex += num; // ... skip a day (in other words, add 1).

			var jan1 = dayIndex;
		
			return  resetToZeroThruSix(jan1);
		}



		this.numDaysFromJanuaryFirstToFirstDayOfRequestedMonth = function(monthID, yearID){
			for (var month=0, monthsDayCounts=[];  month < 12;  ++month) {
				monthsDayCounts[month] = this.numberOfDaysInMonth(month, yearID);
			}

			for (var month = 0, numDays=0;   month < monthID;   ++month) {
				numDays += monthsDayCounts[month];
			}
			return numDays;
		};



		function numLeapYearsBetween1004And(year) {	
			var numPossibleLeapYears = countPossibleLeapYearsUpTo(year);
			var numFalseLeapYears = 
				countPossibleFalseLeapYearsIn(numPossibleLeapYears, year);
		
			return (numPossibleLeapYears - numFalseLeapYears);
		}



		function countPossibleLeapYearsUpTo(year){
			var difference = ( (Math.floor(year)) - 1004);
			return  Math.ceil(difference / 4);
		}



		function countPossibleFalseLeapYearsIn(numPossibleLeapYears, year){
			year = String(year);
			var first2CharsOfYear = year.substr(0,  2);
			if (first2CharsOfYear !== '10'){
				// False leap years are any year that is evenly divisible by 100,
				// evenly divisible by 4, but not evenly divisible by 400.
				return  countFalseLeapYearsIn(numPossibleLeapYears);
			}
			else  return 0;
		}



		function countFalseLeapYearsIn(numPossibleLeapYears){
			for (var i=1, numFalseLeapYears = 0;   i <= numPossibleLeapYears;  ++i){
				var year = (1004 + (i * 4));
				if (year % 100 === 0) {
					if (! isLeapYear(year)){
						numFalseLeapYears += 1;
					}
				}
			}
			return numFalseLeapYears;
		}



		function isLeapYear(year) {
			return ((year % 400 === 0) ||
			   (year % 4 === 0  &&  year % 100 !== 0));
		}



		function resetToZeroThruSix(dayIndex){
			while (dayIndex > 6) {
				dayIndex -= 7;
			}
			return dayIndex;
		}




	};








	var CalendarValidator = function(){

		this.monthAndYearValid = function(monthID, yearID){
			var stringMonthID = ('' + monthID);
			monthID = Math.floor(monthID);
			var integerYearID = Math.floor(yearID);
			var stringYearID = ('' + yearID);

			return (stringMonthID.length > 0 && 
				(typeof monthID === 'number') && 
				(monthID > -1) && (monthID < 12) &&
 				(typeof integerYearID === 'number')  && 
		 		(stringYearID.length === 4) &&  (integerYearID >= 1004) );
		};


	};





})();
