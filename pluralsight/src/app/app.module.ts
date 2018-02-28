import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { ServiceService } from './service.service';
import { ToastrService } from './toastr.service';
import { DetailsComponent } from './details/details.component';
import {appRoutes} from './route';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    NavComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
