import {MonthControlsModule} from './month-controls_module';
import {MonthAndYearControlsComponent} from './month-and-year-controls.component';
import {NgModule} from '@angular/core';
import {YearControlsModule} from './year-controls_module';


@NgModule({
   declarations: [MonthAndYearControlsComponent],
   imports: [
      MonthControlsModule,
      YearControlsModule
   ],
   exports: [MonthAndYearControlsComponent]
})
export class MonthAndYearControlsModule {
}
