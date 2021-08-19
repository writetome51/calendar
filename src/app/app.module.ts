import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from '@app/calendar.component';
import { FormsModule } from '@angular/forms';
import { MonthNameComponent } from './month-name.component';
import { YearComponent } from '@app/year.component';
import { DayNamesComponent } from '@app/day-names.component';
import { DaySquaresComponent } from '@app/day-squares.component';
import { BackOneMonthButtonComponent } from '@app/back-one-month-button.component';
import { ForwardOneMonthButtonComponent } from '@app/forward-one-month-button.component';


@NgModule({
	declarations: [
		AppComponent,
		BackOneMonthButtonComponent,
		CalendarComponent,
		DayNamesComponent,
		DaySquaresComponent,
		ForwardOneMonthButtonComponent,
		MonthNameComponent,
		YearComponent,
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
