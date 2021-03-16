import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from 'src/app/guard/is-logged.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
     {
         path: 'login',
         component: LoginComponent, canActivate:[IsLoggedGuard]
     }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,],
  exports: [RouterModule],
  declarations:[LoginComponent]
})
export class AdminLoginRoutingModule { }
