import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { SelectedMonthComponent } from './selected-month.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MonthControlsComponent } from '@app/month-and-year-controls_module/month-controls_module/month-controls.component';
import { YearControlsModule } from '@app/month-and-year-controls_module/year-controls_module/year-controls.module';


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
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		YearControlsModule
	],
	exports: [MonthControlsComponent]
})
export class MonthControlsModule {}
