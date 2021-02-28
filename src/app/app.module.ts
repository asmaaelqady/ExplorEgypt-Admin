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
import { ViewExploreArticlesComponent } from './components/view-explore-articles/view-explore-articles.component';
import { AddExploreArticlesComponent } from './components/add-explore-articles/add-explore-articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { AddTrainsComponent } from './components/trains/add-trains/add-trains.component';
import { ShowTrainsComponent } from './components/trains/show-trains/show-trains.component';
import { EditTrainsComponent } from './components/trains/edit-trains/edit-trains.component';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSideBarComponent,
    DashboardComponent,
    NotFoundComponent,
    ShowUsersComponent,
    LoginComponent,
    ViewExploreArticlesComponent,
    AddExploreArticlesComponent,
    ShowHotelsComponent,
    AddHotelsComponent,
    AddTrainsComponent,
    ShowTrainsComponent,
    EditTrainsComponent,
    EditHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
