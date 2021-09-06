import { BrowserModule } from '@angular/platform-browser';
import { DayOfMonthComponent } from '@app/weeks-of-month_module/day-of-month.component';
import { NgModule } from '@angular/core';
import { WeeksOfMonthComponent } from '@app/weeks-of-month_module/weeks-of-month.component';
import { WeekBlockModule } from '@app/shared/week-block_module/week-block.module';


@NgModule({
	declarations: [
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
	imports: [BrowserModule, WeekBlockModule],
	exports: [WeeksOfMonthComponent]
})
export class WeeksOfMonthModule {}
