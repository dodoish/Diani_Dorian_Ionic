import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable,Subject} from "rxjs";
import{map} from 'rxjs/operators';
import 'rxjs/add/operator/map'

/*
  Generated class for the JeuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JeuProvider {

  jeuSubject = new Subject <any[]>();
  private jeux = [];

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllJeu();
  }



  emitJeuSubject() {
    this.jeuSubject.next(this.jeux.slice());
  }
  saveNewJeu(jeu: any) {
    return new Observable(obs => {
      this.db.collection('jeux').add(jeu).then(() => {
        console.log('success');
        obs.next();
      })
    });
  }
  getAllJeu() {
    return this.db.collection('jeux').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.jeux = res;
      this.emitJeuSubject();
    })
  }
  update(jeu: any, id: any) {
    return new Observable(obs => {
      this.db.doc('jeux/' + id).update(jeu);
      obs.next();
    })
  }
  getJeuById(id: any) {
    for ( let i = 0; i < this.jeux.length; i++) {
      if (this.jeux[i].id === id) return this.jeux[i];
    }
  }
  delete(id: any){
    this.db.doc('jeux/' + id).delete();
  }
}
