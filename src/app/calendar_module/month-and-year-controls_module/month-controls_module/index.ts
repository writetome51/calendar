import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MonthControlsComponent } from './month-controls.component';
import { NgModule } from '@angular/core';
import { RapidRepeatMatIconButtonModule }
	from '../../shared/rapid-repeat-mat-icon-button_module';
import { SelectedMonthComponent } from './selected-month.component';
import { LeftAndRightArrowButtonsModule } from '@app/calendar_module/shared/left-and-right-arrow-buttons_module';


@NgModule({
	declarations: [
		BackOneMonthButtonComponent,
		ForwardOneMonthButtonComponent,
		SelectedMonthComponent,
		MonthControlsComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		RapidRepeatMatIconButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		LeftAndRightArrowButtonsModule
	],
	exports: [MonthControlsComponent]
})
export class MonthControlsModule {}
