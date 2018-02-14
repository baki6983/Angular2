import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-child-component',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {
@Input() hero: Hero;
@Input('master') masterName:string;
}
