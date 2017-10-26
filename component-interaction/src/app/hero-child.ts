/**
 * Created by Administrator on 2017/10/26.
 */
import { Component,Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector:'app-hero-child',
  template:`
  
`
})
export class HeroChildComponent{
  @Input() hero : Hero;
  @Input('master') masterName :string;
}
