import { Component } from '@angular/core';

@Component({
  selector: 'week-block',
  template: `
	  <div class="week-block">
		 <ng-content></ng-content>
	  </div>
  `,
  styles: [`.week-block {display: block; width: 100%;}`]
})
export class WeekBlockComponent {}
