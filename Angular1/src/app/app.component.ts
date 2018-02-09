import { Component } from '@angular/core';
import {HomeComponent} from './home/index'
import { FormsModule }   from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives :[HomeComponent]

})
export class AppComponent {
  title = 'Angular2';
  name='Baki'
  AppComponentObject={
    name:'srinu',
    age:21
  };
}
