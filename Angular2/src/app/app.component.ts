import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  name="Balakrishna";
  title = 'Angular2';
  array={
    age:25,
    Salary:23333
  }
}
