import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminLoginRoutingModule} from './components/admin-login/login.routing.component'
import { AdminRoutingModule } from './components/admin-components/admin.routing.component';
import { ShowHotelsComponent } from './components/admin-components/components/hotels/show-hotels/show-hotels.component';
import { AllEventsComponent } from './components/admin-components/components/Events/all-events/all-events.component';
import { AddEventsComponent } from './components/admin-components/components/Events/add-events/add-events.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowHotelsComponent,
    AllEventsComponent,
    AddEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLoginRoutingModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
