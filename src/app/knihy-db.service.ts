import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Kniha } from './kniha.model';

@Injectable({
  providedIn: 'root'
})
export class KnihyDBService {

  private dbPath = '/Knihy';
  knihyRef: AngularFireList<Kniha>;

  constructor(private db: AngularFireDatabase) {
    this.knihyRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Kniha> {
    return this.knihyRef;
  }
  create(tutorial: Kniha): any {
    return this.knihyRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.knihyRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.knihyRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.knihyRef.remove();
  }
}
