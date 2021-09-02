import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@app/calendar.component';
import { DayNamesComponent } from '@app/day-names.component';
import { DayOfMonthComponent } from '@app/day-of-month.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MonthAndYearControlsModule }
	from './month-and-year-controls_module/month-and-year-controls.module';
import { WeeksOfMonthComponent } from '@app/weeks-of-month.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		DayNamesComponent,
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MonthAndYearControlsModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
