import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeekBlockComponent} from './week-block.component';

describe('WeekBlockComponent', () => {
   let component: WeekBlockComponent;
   let fixture: ComponentFixture<WeekBlockComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [WeekBlockComponent]
      })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(WeekBlockComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
