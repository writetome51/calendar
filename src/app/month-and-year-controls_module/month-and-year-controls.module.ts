import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MonthAndYearControlsComponent } from './month-and-year-controls.component';
import { MonthAndYearControlsServicesModule } from './month-and-year-controls-services.module';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClickExecuteRapidRepeatComponent }
	from '@app/month-and-year-controls_module/click-execute-rapid-repeat.component';
import { YearControlsModule } from '@app/month-and-year-controls_module/year-controls_module/year-controls.module';
import { MonthControlsModule } from '@app/month-and-year-controls_module/month-controls_module/month-controls.module';


@NgModule({
	declarations: [
		MonthAndYearControlsComponent,
		ClickExecuteRapidRepeatComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MonthAndYearControlsServicesModule,
		MatIconModule,
		MatButtonModule,
		MonthControlsModule,
		YearControlsModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
