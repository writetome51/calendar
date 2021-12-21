import { BrowserModule } from '@angular/platform-browser';
import { BackOneYearButtonComponent } from './back-one-year-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneYearButtonComponent } from './forward-one-year-button.component';
import { NgModule } from '@angular/core';
import { RapidRepeatMatIconButtonModule }
	from '../../shared/rapid-repeat-mat-icon-button_module';
import { SelectedYearComponent } from './selected-year.component';
import { YearControlsComponent } from './year-controls.component';
import { LeftAndRightArrowButtonsModule } from '@app/calendar_module/shared/left-and-right-arrow-buttons_module';


@NgModule({
	declarations: [
		SelectedYearComponent,
		YearControlsComponent,
		BackOneYearButtonComponent,
		ForwardOneYearButtonComponent
	],
	imports: [
		RapidRepeatMatIconButtonModule,
		CommonModule,
		BrowserModule,
		FormsModule,
		LeftAndRightArrowButtonsModule
	],
	exports: [YearControlsComponent]
})
export class YearControlsModule {}
