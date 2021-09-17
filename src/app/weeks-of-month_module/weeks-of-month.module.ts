import { BrowserModule } from '@angular/platform-browser';
import { DayOfMonthComponent } from './day-of-month.component';
import { NgModule } from '@angular/core';
import { WeeksOfMonthComponent } from './weeks-of-month.component';


@NgModule({
	declarations: [
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
	imports: [BrowserModule],
	exports: [WeeksOfMonthComponent]
})
export class WeeksOfMonthModule {}
