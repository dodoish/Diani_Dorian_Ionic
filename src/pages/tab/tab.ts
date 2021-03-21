import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {JeuxListPage} from "../jeux-list/jeux-list";
import {JeuNewPage} from "../jeu-new/jeu-new";
import {PhotosPage} from "../photos/photos";

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  home = HomePage;
  jeux = JeuxListPage;
  jeuNew = JeuNewPage;
  photo= PhotosPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
