import { Component, OnInit } from '@angular/core';
import {ServicesComponent} from '../services/services.component'

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit{

events:any[];
  constructor(private eventService:ServicesComponent) { }

  ngOnInit(){

    this.events=this.eventService.getAllEvents();
  }
}
