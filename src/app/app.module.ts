import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@app/calendar.component';
import { DayNamesComponent } from '@app/day-names.component';
import { FormsModule } from '@angular/forms';
import { MonthAndYearControlsModule }
	from './month-and-year-controls_module/month-and-year-controls.module';
import { NgModule } from '@angular/core';
import { WeeksOfMonthModule } from '@app/weeks-of-month_module/weeks-of-month.module';


@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		DayNamesComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		WeeksOfMonthModule,
		MonthAndYearControlsModule,
		BrowserAnimationsModule // required by @angular/material modules
	],
	bootstrap: [
		AppComponent,
		// CalendarComponent  // To export CalendarComponent as a Web Component
	]
})
export class AppModule {

	/****************
	Code needed to export the CalendarComponent as a Web Component:

	 constructor(private injector: Injector) {
		const el = createCustomElement(CalendarComponent, {injector});
		customElements.define('calendar-widget', el);
	}

	ngDoBootstrap() {}
	 ****************/

}
