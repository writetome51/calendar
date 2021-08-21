import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { SelectedMonthComponent }
	from './selected-month.component';
import { NgModule } from '@angular/core';
import { YearComponent } from './year.component';
import { MonthAndYearControlsComponent } from './month-and-year-controls.component';
import { CommonModule } from '@angular/common';


@NgModule({
	declarations: [
		BackOneMonthButtonComponent,
		ForwardOneMonthButtonComponent,
		SelectedMonthComponent,
		YearComponent,
		MonthAndYearControlsComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
