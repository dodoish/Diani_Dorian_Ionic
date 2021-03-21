import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {JeuProvider} from "../../providers/jeu/jeu";
import {JeuxListPage} from "../jeux-list/jeux-list";

/**
 * Generated class for the JeuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeu',
  templateUrl: 'jeu.html',
})
export class JeuPage implements OnInit{
  public modif: boolean = false;
  private titre: string;
  private id: number;
  private jeu: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  alertCtrl: AlertController,
              private Jeu: JeuProvider,
              private Toast: ToastController,
  ) {
  }
  ngOnInit() {
    this.titre=this.navParams.get('titre');
    this.id=this.navParams.get('id');
    this.jeu =this.Jeu.getJeuById(this.id);
    console.log(this.jeu);
  }


  onGoAccesModif() {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir modifier ?',
      subTitle: "Vous rendrez possible la modification",
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: 'Confirmer',
          handler: () => this.modif = !this.modif
        }
      ]
    });
    alert.present();
  }

  onModif() {
    this.Jeu.update(this.jeu.data, this.jeu.id).subscribe(() => {
      const toast = this.Toast.create({
        message: 'Vos changement ont été sauvegardées',
        duration: 2000
      });
      toast.present();
      this.modif = false;
    })
  }
  onDelete(){
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir supprimer ?',
      subTitle: "Vous supprimé le jeu de votre colection",
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: 'Confirmer',
          handler: () => {
            this.Jeu.delete(this.id);
            this.navCtrl.push(JeuxListPage);
          }
        }
      ]
    });
    alert.present();

  }
}

