import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage } from './tab';
import {HomePage} from "../home/home";
import {JeuxListPage} from "../jeux-list/jeux-list";
import {JeuNewPage} from "../jeu-new/jeu-new";

@NgModule({
  declarations: [
    TabPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPage),
  ],
})
export class TabPageModule {


}
