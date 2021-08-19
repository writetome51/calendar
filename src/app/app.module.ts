import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOneMonthButtonComponent } from '@app/month-and-year-controls_component/back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@app/calendar.component';
import { DayNamesComponent } from '@app/day-names.component';
import { DaySquaresComponent } from '@app/day-squares.component';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from '@app/month-and-year-controls_component/forward-one-month-button.component';
import { ChosenMonthNameComponent } from './month-and-year-controls_component/chosen-month-name.component';
import { NgModule } from '@angular/core';
import { YearComponent } from '@app/month-and-year-controls_component/year.component';
import { MonthAndYearControlsComponent } from '@app/month-and-year-controls_component/month-and-year-controls.component';


@NgModule({
	declarations: [
		AppComponent,
		BackOneMonthButtonComponent,
		CalendarComponent,
		DayNamesComponent,
		DaySquaresComponent,
		ForwardOneMonthButtonComponent,
		ChosenMonthNameComponent,
		YearComponent,
		MonthAndYearControlsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
