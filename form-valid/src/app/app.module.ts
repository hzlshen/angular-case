import { KeyupComponent } from './keyup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import {FormsModule} from '@angular/forms';
// import { HeroComponent } from './hero/hero.component';
import { HeroFormComponent } from './hero/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    // HeroComponent,

  ],
  imports: [
    BrowserModule,
    HeroFormComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
