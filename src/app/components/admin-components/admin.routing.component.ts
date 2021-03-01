import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppAdminComponent } from './app-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [

    {
        path: '',
        component: AppAdminComponent,
        children:[
            {
                path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]
            },
           {
               path: '', redirectTo:'dashboard', pathMatch:'full'
           },
           {
            path: 'allusers', component:ShowUsersComponent,canActivate:[AuthGuard]
        },
           {
               path: '**', component: NotFoundComponent
           },

        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes),FontAwesomeModule],
    exports: [RouterModule],
    declarations:[
        AppAdminComponent,
        HeaderComponent,
        RightSideBarComponent,
        DashboardComponent,
        NotFoundComponent,
        AddHotelComponent,
        ShowHotelsComponent
    ]
  })
export class AdminRoutingModule { }
