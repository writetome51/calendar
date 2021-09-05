
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { SelectedYearComponent } from './selected-year.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { YearControlsComponent }
	from '@app/month-and-year-controls_module/year-controls_module/year-controls.component';
import { BackOneYearButtonComponent } from '@app/month-and-year-controls_module/year-controls_module/back-one-year-button.component';
import { ForwardOneYearButtonComponent } from '@app/month-and-year-controls_module/year-controls_module/forward-one-year-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
	declarations: [
		SelectedYearComponent,
		YearControlsComponent,
		BackOneYearButtonComponent,
		ForwardOneYearButtonComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [YearControlsComponent]
})
export class YearControlsModule {}
