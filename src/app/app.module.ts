import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@app/calendar.component';
import { DayNamesComponent } from '@app/day-names.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MonthAndYearControlsModule }
	from './month-and-year-controls_module/month-and-year-controls.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeeksOfMonthModule } from '@app/weeks-of-month_module/weeks-of-month.module';
import { WeekBlockModule } from '@shared/week-block_module/week-block.module';


@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		DayNamesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		WeeksOfMonthModule,
		MonthAndYearControlsModule,
		BrowserAnimationsModule,
		WeekBlockModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
