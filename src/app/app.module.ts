import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@app/calendar.component';
import { DayNamesComponent } from '@app/day-names.component';
import { DaySquaresComponent } from '@app/day-squares.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MonthAndYearControlsModule }
	from './month-and-year-controls_module/month-and-year-controls.module';


@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		DayNamesComponent,
		DaySquaresComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MonthAndYearControlsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
