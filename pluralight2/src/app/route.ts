import {EventsListComponent} from './events/events-list.component'
import {DetailsComponent} from './details/details.component'
import { CreateNewEventComponent} from './create-new-event/create-new-event.component'
import {Routes} from '@angular/router'
import { ErrorsComponent} from './errors/errors.component'
import { CanActiveRoute } from './can-active-route'

export const appRoutes=[
    {path:'events/new',component:CreateNewEventComponent},
  { path:'events',component:EventsListComponent },
  { path:'events/:id',component:DetailsComponent },
  { path:'404',component:ErrorsComponent ,canActivate:[CanActiveRoute],
  canDeactivate:['canDeactivateCreateEvent']},
  { path:'',redirectTo:'/events',pathMatch:'full'},
  {path :'user', loadChildren:'./user/user.module#UserModule'}

]
