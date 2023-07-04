import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftAndRightArrowButtonsComponent } from './left-and-right-arrow-buttons.component';
import { RapidRepeatArrowButtonComponent } from './rapid-repeat-arrow-button.component';
import { RapidRepeatMatIconButtonComponentModule } from '../rapid-repeat-mat-icon-button-component_module';


@NgModule({
	declarations: [
		LeftAndRightArrowButtonsComponent,
		RapidRepeatArrowButtonComponent
	],
	imports: [
		CommonModule,
		RapidRepeatMatIconButtonComponentModule
	],
	exports: [LeftAndRightArrowButtonsComponent]
})
export class LeftAndRightArrowButtonsModule {}
