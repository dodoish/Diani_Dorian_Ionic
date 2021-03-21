import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JeuProvider} from "../../providers/jeu/jeu";
import {JeuxListPage} from "../jeux-list/jeux-list";


@IonicPage()
@Component({
  selector: 'page-jeu-new',
  templateUrl: 'jeu-new.html',
})
export class JeuNewPage {
  public jeu: any ={
    NameJeu:null,
    Studio:null,
    jacket:null,
    prix:null,
    dateDeSortie:null,
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Jeu:JeuProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JeuNewPage');
  }
  onAdd(){
    this.Jeu.saveNewJeu(this.jeu).subscribe(() =>{
      this.jeu={
        NameJeu:null,
        Studio:null,
        jacket:null,
        prix:null,
        dateDeSortie:null,
      };
      this.navCtrl.push(JeuxListPage);
    });
  }

}
