import {AppComponent} from './app.component';
import {DetailsComponent} from './details/details.component';
import { Routes} from '@angular/router'

export const appRoutes:Routes=[
  {path: 'events',component:AppComponent},
  {path:'events/:id', component:DetailsComponent},
  {path:'', redirectTo:'/events',pathMatch:'full'}
]
