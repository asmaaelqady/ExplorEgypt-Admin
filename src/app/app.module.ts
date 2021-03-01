import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminLoginRoutingModule} from './components/admin-login/login.routing.component'
import { AdminRoutingModule } from './components/admin-components/admin.routing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowUsersComponent } from './components/admin-components/components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLoginRoutingModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
