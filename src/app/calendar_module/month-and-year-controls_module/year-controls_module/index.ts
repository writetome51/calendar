import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {SelectedYearComponent} from './selected-year.component';
import {YearControlsComponent} from './year-controls.component';
import {LeftAndRightArrowButtonsModule}
   from '@app/calendar_module/shared/left-and-right-arrow-buttons_module';


@NgModule({
   declarations: [
      SelectedYearComponent,
      YearControlsComponent
   ],
   imports: [
      CommonModule,
      LeftAndRightArrowButtonsModule
   ],
   exports: [YearControlsComponent]
})
export class YearControlsModule {
}
