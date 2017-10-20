import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage='';
  values = '';

  onClickMe(){
    this.clickMessage = "You are my hero!";
  }
  
  onKey(event:any){
    this.values += event.target.value+'|';
  }
  value = '';
  onEnter(value: string) { this.value = value; }
  
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
