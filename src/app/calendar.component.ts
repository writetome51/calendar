import { CalendarModelService } from '@app/calendar-model.service';
import { Component } from '@angular/core';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">

			<div id="month_and_year">
				<div id="month-and-buttons">

					<div id="back-one-month-container">
						<button class="month-button" id="back-one-month"
								(click)="backOneMonth()">
							<-
						</button>
					</div>

					<div id="month-name">
						<select id="month-selector" name="monthNameOptions"
								[(ngModel)]="model.currentMonthName" (change)="model.update()"
						>
							<option *ngFor="let monthName in model.monthNames">
								{{monthName}}
							</option>
						</select>
					</div>

					<div id="forward-one-month-container">
						<button class="month-button" id="forward-one-month"
								(click)="forwardOneMonth()">
							->
						</button>
					</div>
				</div>

				<div id="year-container">
					<input type="number" id="year" 
						   [(ngModel)]="model.year" (change)="model.update()"
						   min="1004" max="9999"
					/>
				</div>
			</div>

			<div class="day-name" *ngFor="let dayname in model.dayNames">
				{{dayname}}
			</div>

			<div class="day-square" *ngFor="let day in model.daysOfCurrentMonth">
				{{day}}
			</div>

		</div>
	`
})
export class CalendarComponent {

	constructor(public model: CalendarModelService) {}


	backOneMonth() {
		this.changeMonthAndUpdateCalendar(-1);
	}


	forwardOneMonth() {
		this.changeMonthAndUpdateCalendar(1);
	}


	changeMonthAndUpdateCalendar(plusOrMinus: number) {
		this.model.changeMonthBy(plusOrMinus);
		this.model.update();
	}

}
