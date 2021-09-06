import { BrowserModule } from '@angular/platform-browser';
import { DayOfMonthComponent } from '@app/weeks-of-month_module/day-of-month.component';
import { NgModule } from '@angular/core';
import { WeeksOfMonthComponent } from '@app/weeks-of-month_module/weeks-of-month.component';


@NgModule({
	declarations: [
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
	imports: [BrowserModule],
	exports: [WeeksOfMonthComponent]
})
export class WeeksOfMonthModule {}
