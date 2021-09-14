import { Component } from '@angular/core';

@Component({
  selector: 'week-block',
  template: `
	  <div class="week-block fills-parent-dimensions">
		 <ng-content></ng-content>
	  </div>
  `
})
export class WeekBlockComponent {}
