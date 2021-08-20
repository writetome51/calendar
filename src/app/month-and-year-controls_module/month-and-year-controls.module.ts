import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { SelectedMonthNameComponent }
	from './selected-month-name.component';
import { NgModule } from '@angular/core';
import { YearComponent } from './year.component';
import { MonthAndYearControlsComponent } from './month-and-year-controls.component';


@NgModule({
	declarations: [
		BackOneMonthButtonComponent,
		ForwardOneMonthButtonComponent,
		SelectedMonthNameComponent,
		YearComponent,
		MonthAndYearControlsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
