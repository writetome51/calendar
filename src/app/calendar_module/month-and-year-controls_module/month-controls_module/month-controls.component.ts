import {Component} from '@angular/core';
import {MonthDisplayService as monthDisplay} from '@writetome51/calendar-helpers';


@Component({
   selector: 'month-controls',
   template: `
      <div id="month-controls" class="controls-container">

         <left-and-right-arrow-buttons
            [leftFunction]="backOneMonth" [rightFunction]="forwardOneMonth"
         ></left-and-right-arrow-buttons>

         <selected-month></selected-month>

      </div>
   `,
   styles: [`
      #month-controls {
         margin-top: 0;
         margin-right: 5px;
      }
   `]
})
export class MonthControlsComponent {

   backOneMonth = () => monthDisplay.goForwardOrBackOne(-1);

   forwardOneMonth = () => monthDisplay.goForwardOrBackOne(1);

}
