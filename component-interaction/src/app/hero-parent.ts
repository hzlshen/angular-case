/**
 * Created by Administrator on 2017/10/26.
 */
import { Component } from '@angular/core';
import { HEROES } from './hero';

@Component({
  selector:'app-hero-parent',
  template:``
})
export class HeroParentComponent{
  heroes = HEROES;
  
}
