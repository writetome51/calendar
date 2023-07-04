import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from './calendar_module';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


@NgModule({
   declarations: [AppComponent],
   imports: [
      FormsModule,
      BrowserAnimationsModule, // required by @angular/material modules
      CalendarModule
   ],
   bootstrap: [
      AppComponent,
      // CalendarComponent  // To export CalendarComponent as a Web Component
   ]
})
export class AppModule {

   /****************
    Code needed to export the CalendarComponent as a Web Component:

    constructor(private injector: Injector) {
		const el = createCustomElement(CalendarComponent, {injector});
		customElements.define('calendar_module-widget', el);
	}

    ngDoBootstrap() {}
    ****************/

}
