import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	template: `
		<app-calendar></app-calendar>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	title = 'calendar';
}
