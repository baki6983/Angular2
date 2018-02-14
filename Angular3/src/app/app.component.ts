import { Component } from '@angular/core';
import {hero}  from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName:string='baki';
  lastName:string='Suggu';
  getFullname():string{
    return this.firstName+" "+this.lastName;
  }
   title1 = 'Tour of Heroes';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroes = [
    new hero(1, 'Windstorm'),
    new hero(13, 'Bombasto'),
    new hero(15, 'Magneta'),
    new hero(20, 'Tornado')
  ];
  myHero = this.heroes[0].name;


}
