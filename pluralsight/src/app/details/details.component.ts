import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px}
    `]
})
export class DetailsComponent implements OnInit {

  constructor(private eventService:ServiceService) { }
event:any;
  ngOnInit() {
    this.event=this.eventService.getEventById(1)
  }

}
