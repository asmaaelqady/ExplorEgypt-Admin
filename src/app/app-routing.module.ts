import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hotels/all', component: ShowHotelsComponent},
  {path: 'hotels/add', component: AddHotelComponent},
  {path: 'users/all', component: ShowUsersComponent},
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
