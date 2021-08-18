import { CalendarModelService } from '@app/calendar-model.service';
import { Component } from '@angular/core';


@Component({
	selector: 'app-calendar',
	template: `
		<div id='cal-boundary'>

			<div id='month_and_year'>
				<div id='month-and-buttons'>

					<div id='back-one-month-container'>
						<button class='month-button' id='back-one-month'
								(click)="backOneMonthUpdate()">
							<-
						</button>
					</div>

					<div id='month-name'>
						<select id='month-selector' name='monthNameOptions' 
								[(ngModel)]="model.monthName"
								ng-options='item for item in cal.model.monthNames'
								(change)="update()">
						</select>
					</div>

					<div id='forward-one-month-container'>
						<button class='month-button' id='forward-one-month'
								ng-click='cal.forwardOneMonthUpdate()'>
							->
						</button>
					</div>
				</div>

				<div id='year-container'>
					<input type='number' id='year' ng-model='cal.model.year'
						   min='1004' max='9999'
						   (change)="update()"
					/>
				</div>
			</div>

			<div class='day-name' *ngFor="let dayname in model.days">
				{{dayname}}
			</div>

			<div class='cal-day' *ngFor="let daySquareNoNumber in model.daySquares.withoutNumbers">
				{{daySquareNoNumber}}
			</div>

			<div class='cal-day' *ngFor="let numberedDaySquare in model.daySquares.withNumbers">
				{{numberedDaySquare}}
			</div>

		</div>
	`
})
export class CalendarComponent {

	constructor(public model: CalendarModelService) {}


	update() {
		this.model.updateMonthID();
		this.model.updateDaySquares();
	}


	backOneMonthUpdate() {
		this.changeMonthAndUpdateCalendar(-1);
	}


	forwardOneMonthUpdate() {
		this.changeMonthAndUpdateCalendar(1);
	}


	changeMonthAndUpdateCalendar(plusOrMinus: number) {
		this.model.changeMonthBy(plusOrMinus);
		this.update();
	}


}
