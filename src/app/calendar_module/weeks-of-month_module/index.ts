import { BrowserModule } from '@angular/platform-browser';
import { DayOfMonthComponent } from './day-of-month.component';
import { NgModule } from '@angular/core';
import { WeeksOfMonthComponent } from './weeks-of-month.component';
import {
   WeekBlockComponentModule
} from '@app/calendar_module/shared/week-block-component_module';


@NgModule({
	declarations: [
		WeeksOfMonthComponent,
		DayOfMonthComponent
	],
   imports: [BrowserModule, WeekBlockComponentModule],
	exports: [WeeksOfMonthComponent]
})
export class WeeksOfMonthModule {}
