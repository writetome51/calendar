import { BrowserModule } from '@angular/platform-browser';
import { BackOneYearButtonComponent } from './back-one-year-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneYearButtonComponent } from './forward-one-year-button.component';
import { NgModule } from '@angular/core';
import { RapidRepeatMatIconButtonModule }
	from '@shared/rapid-repeat-mat-icon-button_module/rapid-repeat-mat-icon-button.module';
import { SelectedYearComponent } from './selected-year.component';
import { YearControlsComponent } from './year-controls.component';


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
		FormsModule
	],
	exports: [YearControlsComponent]
})
export class YearControlsModule {}
