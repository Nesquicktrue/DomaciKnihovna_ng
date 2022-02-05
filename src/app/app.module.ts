import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HlavickaComponent } from './hlavicka/hlavicka.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PridejknihuComponent } from './pridejknihu/pridejknihu.component';
import { SeznamknihComponent } from './seznamknih/seznamknih.component';
import { HodnoceniComponent } from './hodnoceni/hodnoceni.component';

@NgModule({
  declarations: [
    AppComponent,
    HlavickaComponent,
    PridejknihuComponent,
    SeznamknihComponent,
    HodnoceniComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
