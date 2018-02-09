import { Component, OnInit,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeTitle="Welcome to homepage!!";
myString="stringFromTypescript";

@Input() AppComponentObject;
alertMe(val)
{
  alert(val);
}
myName={
  name:'baki',
  age:12

};
  constructor() { }

  ngOnInit() {
  }

}
