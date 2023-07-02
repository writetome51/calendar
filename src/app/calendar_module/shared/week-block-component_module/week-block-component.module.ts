import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekBlockComponent } from './week-block-component/week-block.component';


@NgModule({
	declarations: [WeekBlockComponent],
	imports: [CommonModule],
	exports: [WeekBlockComponent]
})
export class WeekBlockComponentModule {}
