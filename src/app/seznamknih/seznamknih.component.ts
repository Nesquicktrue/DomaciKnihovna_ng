import { Component, OnInit } from '@angular/core';
import { KnihyDBService } from '../knihy-db.service';
import { Kniha } from '../kniha.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-seznamknih',
  templateUrl: './seznamknih.component.html',
  styleUrls: ['./seznamknih.component.css']
})
export class SeznamknihComponent implements OnInit {
  seznamKnih: any = [];
  soucasnaKniha?: Kniha;
  soucasnyIndex = -1;

  constructor(private KnihyDB: KnihyDBService) { }

  ngOnInit(): void {
    this.nactiKnihy()
  }
  
  refreshList(): void {
    this.soucasnaKniha = undefined;
    this.soucasnyIndex = -1;
    this.nactiKnihy();
  }

  nactiKnihy(): void {
    this.KnihyDB.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.seznamKnih = data;
    });
  }

}
