import { Component, OnInit } from '@angular/core';
import { Kniha } from '../kniha.model';
import { Data } from '@angular/router';
import { KnihyDBService } from '../knihy-db.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-pridejknihu',
  templateUrl: './pridejknihu.component.html',
  styleUrls: ['./pridejknihu.component.css'],
})
export class PridejknihuComponent {
  novaKnihaForm = this.fb.group({
    inputKodISBN: [''],
    inputNazevKnihy: ['', Validators.required],
    inputAutorKnihy: ['', Validators.required],
    inputStranKnihy: ['']
  });

  kniha: Kniha = new Kniha();
  submitted = false;
  constructor(private KnihyDBService: KnihyDBService, private fb: FormBuilder) { }

  zalozTest() {
    let testKniha: Kniha = {
      pridano: new Date,
      nazev: "Testovací",
      autor: "Jan Novák",
      stran: 69,
      precteno: false,
      isbn: 12345678910,
      rating: 4,
      hodnoceni: "Cillum aliqua commodo voluptate dolor. Sint deserunt mollit aute sit ut sunt deserunt reprehenderit. Fugiat exercitation in nostrud aute consectetur velit. Ut sint do eiusmod sit deserunt non mollit cupidatat officia enim ut nostrud. Incididunt aute nisi reprehenderit et do nulla occaecat culpa nisi consectetur eu."
    }
    this.KnihyDBService.create(testKniha)
  }
  
  onSubmit() {
    this.kniha = {
      isbn: this.novaKnihaForm.value.inputKodISBN,
      nazev: this.novaKnihaForm.value.inputNazevKnihy,
      autor: this.novaKnihaForm.value.inputAutorKnihy,
      stran: this.novaKnihaForm.value.inputStranKnihy,
      precteno: true,
      pridano: new Date
    }
    this.KnihyDBService.create(this.kniha)
    console.log(this.kniha);
  }

}
