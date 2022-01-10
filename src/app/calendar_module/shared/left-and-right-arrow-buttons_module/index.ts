import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftAndRightArrowButtonsComponent } from './left-and-right-arrow-buttons.component';
import { RapidRepeatArrowButtonComponent } from './rapid-repeat-arrow-button.component';
import { RapidRepeatMatIconButtonModule } from '../rapid-repeat-mat-icon-button_module';


@NgModule({
	declarations: [
		LeftAndRightArrowButtonsComponent,
		RapidRepeatArrowButtonComponent
	],
	imports: [
		CommonModule,
		RapidRepeatMatIconButtonModule
	],
	exports: [LeftAndRightArrowButtonsComponent]
})
export class LeftAndRightArrowButtonsModule {}
