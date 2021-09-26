import { MonthControlsModule } from './month-controls_module/month-controls.module';
import { MonthAndYearControlsComponent } from './month-and-year-controls.component';
import { NgModule } from '@angular/core';
import { YearControlsModule } from './year-controls_module/year-controls.module';


@NgModule({
	declarations: [MonthAndYearControlsComponent],
	imports: [
		MonthControlsModule,
		YearControlsModule
	],
	exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {}
