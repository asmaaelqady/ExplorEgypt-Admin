import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ShowUsersComponent } from './components/show-users/show-users.component';
import { LoginComponent } from './components/login/login.component';

import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTrainsComponent } from './components/trains/add-trains/add-trains.component';
import { ShowTrainsComponent } from './components/trains/show-trains/show-trains.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSideBarComponent,
    DashboardComponent,
    NotFoundComponent,
    ShowUsersComponent,
    LoginComponent,
    ShowHotelsComponent,
    AddHotelsComponent,
    AddTrainsComponent,
    ShowTrainsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
