import { BrowserModule } from '@angular/platform-browser';
import { DayOfMonthComponent } from './day-of-month.component';
import { NgModule } from '@angular/core';
import { WeeksOfMonthComponent } from './weeks-of-month.component';
import { WeekBlockModule } from '@shared/week-block_module/week-block.module';


@NgModule({
	declarations: [
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
	imports: [BrowserModule, WeekBlockModule],
	exports: [WeeksOfMonthComponent]
})
export class WeeksOfMonthModule {}
