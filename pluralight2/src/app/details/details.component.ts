import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ActivatedRoute } from '@angular/router'
@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
event:any;
  constructor(private servicesComponent:ServicesComponent
  ,private activateroute:ActivatedRoute) {}

  ngOnInit() {
     this.event=this.servicesComponent.getEventById(+this.activateroute.snapshot.params['id'])
  }

}
