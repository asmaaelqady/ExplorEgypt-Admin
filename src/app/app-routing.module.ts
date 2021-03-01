import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'hotels/all', component: ShowHotelsComponent},
  // {path: 'hotels/add', component: AddHotelComponent},
  // {path: 'users/all', component: ShowUsersComponent},
  // {path: '', redirectTo:'dashboard', pathMatch:'full'},
  // {path:'', loadChildren:() => import('./components/admin-components/admin-components.module').then(m => m.AdminComponentsModule)},
  // {path:'login',loadChildren:() =>import('./components/admin-login/admin-login.module').then(m => m.AdminLoginModule)},
  // {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
