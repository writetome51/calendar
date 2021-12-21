import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftAndRightArrowButtonsComponent } from './left-and-right-arrow-buttons.component';
import { ArrowButtonComponent } from './arrow-button.component';
import { RapidRepeatMatIconButtonModule } from '../rapid-repeat-mat-icon-button_module';


@NgModule({
	declarations: [
		LeftAndRightArrowButtonsComponent,
		ArrowButtonComponent
	],
	imports: [
		CommonModule,
		RapidRepeatMatIconButtonModule
	],
	exports: [LeftAndRightArrowButtonsComponent]
})
export class LeftAndRightArrowButtonsModule {}
