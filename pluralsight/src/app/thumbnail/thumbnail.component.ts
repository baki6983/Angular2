import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
@Input() event:any;
getTimeStyle():any{
  if(this.event&&this.event.time==='8:00 am')
  return {color:'#003300','font-weight':'bold'}
  return {}
}
  constructor() { }
  ngOnInit() {
  }

}
