import {Component} from '@angular/core';

@Component({
   selector: 'week-block',
   template: `
      <div class="week-block">
         <ng-content></ng-content>
      </div>
   `,
   styles: [
      `.week-block {
			margin: auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
		}`
   ]
})
export class WeekBlockComponent {
}
