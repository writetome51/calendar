import { ClickExecuteRapidRepeatFunctionModule }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { RapidRepeatMatIconButtonComponent } from './rapid-repeat-mat-icon-button.component';


@NgModule({
	declarations: [RapidRepeatMatIconButtonComponent],
	imports: [
		ClickExecuteRapidRepeatFunctionModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [RapidRepeatMatIconButtonComponent]
})
export class RapidRepeatMatIconButtonModule {}
