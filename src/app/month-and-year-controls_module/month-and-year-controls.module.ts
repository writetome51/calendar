import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { MatInputModule } from '@angular/material/input';
import { MonthAndYearControlsComponent } from './month-and-year-controls.component';
import { MonthAndYearControlsServicesModule } from './month-and-year-controls-services.module';
import { NgModule } from '@angular/core';
import { SelectedMonthComponent } from './selected-month.component';
import { SelectedYearComponent } from './selected-year.component';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
	declarations: [
		BackOneMonthButtonComponent,
		ForwardOneMonthButtonComponent,
		SelectedMonthComponent,
		SelectedYearComponent,
		MonthAndYearControlsComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MonthAndYearControlsServicesModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
