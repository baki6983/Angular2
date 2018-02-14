import { Component } from '@angular/core';
import { HEROES } from './hero';

@Component({
  selector: 'app-root',
  template:`
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-child-component *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-child-component>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes=HEROES;
  master='Master';
}
