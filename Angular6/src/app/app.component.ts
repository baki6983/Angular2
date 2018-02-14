import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clickMessage1="";

  object={
    name:'baki',
    age:30
  }
  yell(e){
    this.clickMessage1="Hello this is from ";
  }
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  values = '';

  onKey1(event:any) { // without type info
    this.values +=(<HTMLInputElement>event.target).value + ' | ';
  }

  value = '';
  onEnter(value: string) {
    this.value = value;
   }

   value1="";
   update(value:string){
     this.value1=value;
   }

   data=['baki','issa','srinu','appala'];

   addHero(newHero:string){
     if(newHero){
       this.data.push(newHero);
     }
   }

   removeHero(newHero:string)
   {
      this.data.shift();
   }
}
