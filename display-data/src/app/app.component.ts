import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
<h2>My favorite hero is: {{myHero.name}}</h2>
<p>Heroes:</p>
<ul>
  <li *ngFor="let hero of heroes">
  {{ hero.name }}
</li>
</ul>
<p *ngIf="heroes.length > 3">There are many heroes!</p>
`,
})
export class AppComponent  {
  //变量赋值
  title = "Tour of Heroes";
  //myHero = "Windstorm";
  heroes =[
    new Hero(1,"Windstorm"),
    new Hero(2,"Bombasto"),
    new Hero(3,'Magneta'),
    new Hero(24,'Tornado')
  ];
  
  //使用构造函数声明和初始化属性
  /*title:string;
  myHero:string;
  
  constructor(){
    this.title = "Tour of Heroes";
    this.myHero = "Windstorm";
  }*/
  //两种风格的效果是一样的
  myHero = this.heroes[0];
}
