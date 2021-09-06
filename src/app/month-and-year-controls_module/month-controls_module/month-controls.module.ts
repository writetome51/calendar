import { BackOneMonthButtonComponent } from './back-one-month-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClickExecuteRapidRepeatFunctionModule }
	from '../../click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneMonthButtonComponent } from './forward-one-month-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MonthControlsComponent } from './month-controls.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { SelectedMonthComponent } from './selected-month.component';


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
		ClickExecuteRapidRepeatFunctionModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatOptionModule
	],
	exports: [MonthControlsComponent]
})
export class MonthControlsModule {}
