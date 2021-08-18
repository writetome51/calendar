import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';
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

					<app-month-name></app-month-name>

					<div id="forward-one-month-container">
						<button class="month-button" id="forward-one-month"
								(click)="forwardOneMonth()">
							->
						</button>
					</div>
				</div>

				<app-year></app-year>
			</div>

			<app-day-names></app-day-names>
			
			<app-day-squares></app-day-squares>

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
