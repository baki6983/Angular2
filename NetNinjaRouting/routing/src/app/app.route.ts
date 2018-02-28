
import {HomeComponent} from './home/home.component';
import {DirectoryComponent} from './directory/directory.component';
import {provideRoutes} from '@angular/router';
const APP_ROUTE=[
  { path:'directory', component:DirectoryComponent } ,
  { path:'', component:HomeComponent } ,
];
export const APP_ROUTE_PROVIDE=[
  provideRoutes(APP_ROUTE)
]
