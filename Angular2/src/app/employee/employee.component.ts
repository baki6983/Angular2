import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
    firstName: string = 'Tom';
     lastName: string = 'Hopkins';
     gender: string = 'Male';
     age: number = 20;
  constructor() { }

}
