import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { ThumbnailsComponent } from './events/thumbnails/thumbnails.component';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { appRoutes } from './route'
import { RouterModule} from '@angular/router';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { ErrorsComponent } from './errors/errors.component'
import { CanActiveRoute}  from './can-active-route'
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    ThumbnailsComponent,
    NavComponent,
    DetailsComponent,
    CreateNewEventComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServicesComponent,
    CanActiveRoute,
    { provide:'canDeactivateCreateEvent',
     useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 function checkDirtyState(){
   return false;
 }
