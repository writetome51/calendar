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
import { SelectedYearComponent } from './year-controls_component/selected-year.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { YearControlsComponent }
	from '@app/month-and-year-controls_module/year-controls_component/year-controls.component';
import { BackOneYearButtonComponent } from '@app/month-and-year-controls_module/year-controls_component/back-one-year-button.component';
import { ForwardOneYearButtonComponent } from '@app/month-and-year-controls_module/year-controls_component/forward-one-year-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MonthControlsComponent } from '@app/month-and-year-controls_module/month-controls.component';


@NgModule({
	declarations: [
		BackOneMonthButtonComponent,
		ForwardOneMonthButtonComponent,
		SelectedMonthComponent,
		SelectedYearComponent,
		YearControlsComponent,
		BackOneYearButtonComponent,
		ForwardOneYearButtonComponent,
		MonthAndYearControlsComponent,
		MonthControlsComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MonthAndYearControlsServicesModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
