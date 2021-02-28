import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesArticlesComponent } from './components/activities-articles/activities-articles.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AddTrainsComponent } from './components/trains/add-trains/add-trains.component';
import { ShowTrainsComponent } from './components/trains/show-trains/show-trains.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hotels/all', component: ShowHotelsComponent},
  {path: 'hotels/add', component: AddHotelsComponent},
  {path: 'trains/all', component: ShowTrainsComponent},
  {path: 'trains/add', component: AddTrainsComponent},
  {path: 'users/all', component: ShowUsersComponent},
  {path: 'activitiesArticles', component: ActivitiesArticlesComponent},
  {path: 'addActivitiesArticle', component: AddArticleComponent},
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
