import {Component, Input} from '@angular/core';
import {getArrFilled} from '@writetome51/get-arr-filled';
import {getPage} from '@writetome51/array-get-page';
import {getRoundedUp} from '@writetome51/get-rounded-up-down';


@Component({
   selector: 'weeks-of-month',
   template: `
      <week-block *ngFor="let week of weeks">
         <div *ngFor="let day of week" class="day-column">
            <day-of-month [number]="day"></day-of-month>
         </div>
      </week-block>
   `
})
export class WeeksOfMonthComponent {

   weeks: (number | undefined)[][] = [];

   @Input() set days(dys: (number | undefined)[]) {
      this.weeks = getArrFilled(
         getRoundedUp(dys.length / 7),
         // @ts-ignore
         (i) => getPage(i + 1, 7, dys)
      );
      const last = this.weeks.length - 1;
      const lastWeekLength = this.weeks[last].length;
      this.weeks[last].push(...this.__getFillerForLastWeek(lastWeekLength));
   }


   private __getFillerForLastWeek(lastWeekLength): undefined[] {
      if (lastWeekLength < 7) return getArrFilled(7 - lastWeekLength, () => undefined);
      else return [];
   }

}
