import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HlavickaComponent } from './hlavicka/hlavicka.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PridejknihuComponent } from './pridejknihu/pridejknihu.component';
import { SeznamknihComponent } from './seznamknih/seznamknih.component';
import { HodnoceniComponent } from './hodnoceni/hodnoceni.component';
import { PatickaComponent } from './paticka/paticka.component';

import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    HlavickaComponent,
    PridejknihuComponent,
    SeznamknihComponent,
    HodnoceniComponent,
    PatickaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){         
  }
 }
