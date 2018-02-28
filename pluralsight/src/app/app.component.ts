import { Component,OnInit} from '@angular/core';
import {ServiceService} from './service.service'
import {ToastrService} from './toastr.service';

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events:any;
constructor(private service:ServiceService, private toastservice:ToastrService){
}
ngOnInit(){
  this.events=this.service.getEvents()
}
toastMessage(eventname)
{
  this.toastservice.success(eventname)
}
}
