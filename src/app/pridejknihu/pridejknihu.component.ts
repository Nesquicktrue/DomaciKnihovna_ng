import { Component, OnInit } from '@angular/core';
import { Kniha } from '../kniha.model';
import { Data } from '@angular/router';


@Component({
  selector: 'app-pridejknihu',
  templateUrl: './pridejknihu.component.html',
  styleUrls: ['./pridejknihu.component.css'],
})
export class PridejknihuComponent {


  constructor() {
  }

  zalozTest() {
    let testKniha: Kniha = {
      id: 999,
      pridano: new Date,
      nazev: "Testovací",
      autor: "Jan Novák",
      stran: 69,
      precteno: false,
      isbn: 12345678910,
      rating: 4,
      hodnoceni: "Cillum aliqua commodo voluptate dolor. Sint deserunt mollit aute sit ut sunt deserunt reprehenderit. Fugiat exercitation in nostrud aute consectetur velit. Ut sint do eiusmod sit deserunt non mollit cupidatat officia enim ut nostrud. Incididunt aute nisi reprehenderit et do nulla occaecat culpa nisi consectetur eu."
    }
    console.log(testKniha);

  

  }

}
