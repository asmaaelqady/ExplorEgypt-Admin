import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExploreArticlesComponent } from './components/add-explore-articles/add-explore-articles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ViewExploreArticlesComponent } from './components/view-explore-articles/view-explore-articles.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hotels/all', component: ShowHotelsComponent},
  {path: 'hotels/add', component: AddHotelComponent},
  {path: 'users/all', component: ShowUsersComponent},
  {path: 'addExploreArticle', component: AddExploreArticlesComponent},
  {path: 'viewExploreArticles', component: ViewExploreArticlesComponent},
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
