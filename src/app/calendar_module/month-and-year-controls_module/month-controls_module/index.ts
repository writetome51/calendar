import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MonthControlsComponent} from './month-controls.component';
import {NgModule} from '@angular/core';
import {SelectedMonthComponent} from './selected-month.component';
import {LeftAndRightArrowButtonsModule}
   from '@app/calendar_module/shared/left-and-right-arrow-buttons_module';


@NgModule({
   declarations: [
      SelectedMonthComponent,
      MonthControlsComponent,
   ],
   imports: [
      CommonModule,
      //	BrowserModule,
      //	FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatOptionModule,
      LeftAndRightArrowButtonsModule
   ],
   exports: [MonthControlsComponent]
})
export class MonthControlsModule {
}
