import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JeuPage} from "../jeu/jeu";
import {JeuProvider} from "../../providers/jeu/jeu";
import {Subscription} from "rxjs";

@IonicPage()
@Component({
  selector: 'page-jeux-list',
  templateUrl: 'jeux-list.html',
})
export class JeuxListPage implements OnInit{
  public jeux: any =[];
  jeuSubscription:Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Jeu: JeuProvider) {
  }
  ngOnInit(){
    this.jeuSubscription=this.Jeu.jeuSubject.subscribe((listJeu) =>{
      this.jeux=listJeu;
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JeuxListPage');
  }

  onGoToJeu(titre:string,_id:number){
    //permet de naviguer vers le détail d'un jeu
    this.navCtrl.push(JeuPage,{titre:titre, id:_id});
  }

}
