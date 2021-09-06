import { BrowserModule } from '@angular/platform-browser';
import { BackOneYearButtonComponent } from './back-one-year-button.component';
import { ClickExecuteRapidRepeatFunctionModule }
	from '../../click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForwardOneYearButtonComponent } from './forward-one-year-button.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
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
		CommonModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		ClickExecuteRapidRepeatFunctionModule
	],
	exports: [YearControlsComponent]
})
export class YearControlsModule {}
