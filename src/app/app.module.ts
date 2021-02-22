import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSideBarComponent,
    DashboardComponent,
    NotFoundComponent,
    AddHotelComponent,
    ShowHotelsComponent,
    ShowUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
